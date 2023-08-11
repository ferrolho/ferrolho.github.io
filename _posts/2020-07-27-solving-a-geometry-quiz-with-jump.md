---
title: "Solving a Geometry Quiz with JuMP"
date: 2020-07-27 17:00:00 +0100
og_image: "/images/julia/square_quiz.png"
categories:
  - Optimization
  - Julia
---

# Introduction

In this post I want to show you how easy and fun it is to model a little geometry quiz using [Julia](https://julialang.org/).

My goal is to give you a quick glance at the basic syntax needed to formulate and solve the problem. 

> Target audience: beginners in numerical optimisation or newcomers to the Julia ecosystem.

# The Problem

Consider the shapes shown in Figure 1 and the following constraints:
- All rectangles (**A**, **B**, **C**, **D**, and **E**) have the same area;
- Their geometric layout makes up a *square*; and
- The height of rectangle **A** is 2.

What is the area of the square?

> You can try to solve this quiz on your own first, using a pen and a piece of paper.

<figure>
  <img src="{{ "/images/julia/square_quiz.svg" | absolute_url }}" alt="quiz image">
  <figcaption><strong>Figure 1.</strong> <em>Layout of the rectangles.</em></figcaption>
</figure>

# The Solution

There are many ways to reach the solution for this problem. The way I solved it was by realising that rectangles **C** and **D** are *exactly* the same. Why? We know all rectangles have the same area, and we also know that **C** and **D** share an edge. So, surely, they have the same *height*! That means that the height of **B** is two times the height of **C** or **D**. After knowing that, it is possible to solve for the height of **B**.

# Constrained Optimisation

Now I want to show you how you could reach the solution by formulating a *constrained optimisation* problem. I am going to use [JuMP](https://jump.dev/JuMP.jl/stable/), a language for modeling mathematical optimisation problems.

First, we import `JuMP` and `Ipopt`. `Ipopt` is a free solver for these kind of problems:
```julia
using JuMP
using Ipopt
```

Afterwards, we create a new model and declare the problem variables (the height and the width of each rectangle):
```julia
model = Model(Ipopt.Optimizer)

@variables(model, begin
    0 <= Ah ; 0 <= Bh ; 0 <= Ch ; 0 <= Dh ; 0 <= Eh
    0 <= Aw ; 0 <= Bw ; 0 <= Cw ; 0 <= Dw ; 0 <= Ew
end)
```

Then, we give an initial guess for those values, and fix the value of the height of **A**:
```julia
# Specifying an initial guess
set_start_value.([Ah Bh Ch Dh Eh
                  Aw Bw Cw Dw Ew], 2)

fix(Ah, 2, force=true)  # Given in the problem
```

Now, using the `@constraint` macro, we define the problem constraints:
```julia
# Areas relationship: A = B = C = D = E
@constraint(model, Ah * Aw == Bh * Bw)
@constraint(model, Bh * Bw == Ch * Cw)
@constraint(model, Ch * Cw == Dh * Dw)
@constraint(model, Dh * Dw == Eh * Ew)

# Total area relationship
@constraint(model, 5 * Ah * Aw == Eh * Eh)

# Width relationships
@constraint(model, Cw == Dw)
@constraint(model, Aw == Bw + Cw)

# Height relationships
@constraint(model, Bh == Ch + Dh)
@constraint(model, Eh == Ah + Bh)
```

Notice that, in the constraints defined above, I never told the solver that `Ch = Bh / 2`. I don't have to! All of the constraints I declared are very straightforward, and directly observed from Figure 1—and that should be sufficient for the solver to figure everything out. How cool is that?!

Finally, we just need to call
```julia
optimize!(model)
```

Once the solver is done, you can print the answer to the quiz and the values found for every edge with:
```julia
area = round(value(Eh * Eh), digits=3)

println("Total area of the square is $(area).")

round.(value.([Ah Bh Ch Dh Eh
               Aw Bw Cw Dw Ew]), digits=3) |> display
```

Which should output the following:
```
Total area of the square is 64.0.

2×5 Array{Float64,2}:
 2.0  6.0    3.0    3.0    8.0
 6.4  2.133  4.267  4.267  1.6
```

# Plotting the Results

After having solved the problem, we can use the values to plot Figure 1 (the image shown on the top of this page) with the code below and using [Plots.jl](https://docs.juliaplots.org/latest/).
```julia
using Plots

rectangle(x, y, w, h) = Shape(x .+ [0,w,w,0], y .+ [0,0,h,h])

plot(axis=false, ticks=false, legend=nothing,
     aspect_ratio=:equal, size=(600, 600),
     background_color=:transparent,
     foreground_color=:black,
     palette=:Pastel1)

plot!(rectangle(        0, value(Bh), value(Aw), value(Ah)), linewidth=2)
plot!(rectangle(        0,         0, value(Bw), value(Bh)), linewidth=2)
plot!(rectangle(value(Bw), value(Dh), value(Cw), value(Ch)), linewidth=2)
plot!(rectangle(value(Bw),         0, value(Dw), value(Dh)), linewidth=2)
plot!(rectangle(value(Aw),         0, value(Ew), value(Eh)), linewidth=2)

font_size = 20
annotate!(            value(Aw) / 2, value(Bh) + value(Ah) / 2, text("A", font_size))
annotate!(            value(Bw) / 2,             value(Bh) / 2, text("B", font_size))
annotate!(value(Bw) + value(Cw) / 2, value(Dh) + value(Ch) / 2, text("C", font_size))
annotate!(value(Bw) + value(Dw) / 2,             value(Dh) / 2, text("D", font_size))
annotate!(value(Aw) + value(Ew) / 2,             value(Eh) / 2, text("E", font_size))

annotate!(0.10 * value(Aw), value(Bh) + value(Ah) / 2, text("2", font_size))
quiver!([0.05 * value(Aw)], [value(Bh) + value(Ah) / 2], quiver=([0], [ value(Ah) / 2.1]), color=:black, linewidth=2)
quiver!([0.05 * value(Aw)], [value(Bh) + value(Ah) / 2], quiver=([0], [-value(Ah) / 2.1]), color=:black, linewidth=2)

savefig("./square_quiz.svg")
```

# The End

This is the end of the post. Thank you for getting this far! Feel free to leave a comment below.
