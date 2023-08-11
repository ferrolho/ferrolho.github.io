---
title: "How to Install Julia 1.8 on Ubuntu"
date: 2019-01-26 18:24:00 +0000
categories:
  - Julia
  - Linux
  - Ubuntu
---

<link rel="stylesheet" href="{{ "/assets/css/custom/code_before.css" | relative_url }}">

# Introduction

*"[Julia](https://julialang.org/) is a high-level, high-performance, dynamic programming language. While it is a general purpose language and can be used to write any application, many of its features are well-suited for high-performance numerical analysis and computational science."* — from [Wikipedia: Julia (programming language)](https://en.wikipedia.org/wiki/Julia_(programming_language)).

In this guide, I'll show you how to get started with Julia on Ubuntu 16.04 (or above).

# Installation

Open a new terminal and go to your Downloads folder:
```
cd ~/Downloads
```

Use `wget` to retrieve the latest compressed [Julia Linux Binaries](https://julialang.org/downloads/):
```
wget https://julialang-s3.julialang.org/bin/linux/x64/1.8/julia-1.8.3-linux-x86_64.tar.gz
```

Extract the `.tar.gz`:
```
tar -xvzf julia-1.8.3-linux-x86_64.tar.gz
```

Copy the extracted folder to [`/opt`](https://askubuntu.com/a/34922/292615):
```
sudo cp -r julia-1.8.3 /opt/
```

Finally, create a symbolic link to `julia` inside the `/usr/local/bin` folder:
```
sudo ln -s /opt/julia-1.8.3/bin/julia /usr/local/bin/julia
```

# Conclusion

Finally, you can test your installation by re-opening a terminal and typing:
```
julia
```

<div style="text-align: center;"><img class="mac-style-drop-shadow" style="width: 80%;" src="{{ "/images/julia/julia-repl.png" | absolute_url }}" alt="Julia REPL"></div>

# What's next?

If you are here, chances are that you are just starting to learn Julia. I hope you enjoy the programming language as much as I have enjoyed it in the last couple of months.

If you are going to be using Julia in the context of *optimization*, check out this simple example: [Solving a Geometry Quiz with JuMP]({{ site.baseurl }}{% link _posts/2020-07-27-solving-a-geometry-quiz-with-jump.md %}). As a more complex example, you can use Julia to optimize the [Space Shuttle Reentry Trajectory]({{ site.baseurl }}{% link _posts/2020-05-25-space-shuttle-reentry-trajectory.md %}). Finally, for a real-world application of Julia, check out [my research](https://ferrolho.github.io/research/publications/ferrolho2020optimizing/) in robotics.

{% include youtube.html id="pV4s7hzUgjc" %}
