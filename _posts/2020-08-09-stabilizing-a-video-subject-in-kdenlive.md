---
title: "Stabilizing a Video Subject in Kdenlive"
date: 2020-08-09 23:00:00 +0100
categories:
  - Kdenlive
tags:
  - video editing
---

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 140px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -75px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    kbd {
        background-color: #eee;
        border-radius: 3px;
        border: 1px solid #b4b4b4;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;
        color: #333;
        display: inline-block;
        font-size: .85em;
        font-weight: 700;
        line-height: 1;
        padding: 2px 4px;
        white-space: nowrap;
    }
</style>

# Introduction

In this post I want to show you how to stabilize a video subject (person, object, etc.) with [Kdenlive](https://kdenlive.org/en/).

When I was trying to learn how to do this, I could only find tutorials on how to use `vidstab`. However, that was not what I was looking for, because `vidstab` tries to stabilize the whole frame, and it can introduce distortions in some areas.

The video below shows three different clips: the original footage (left), the stabilized clip obtained with `vidstab` (middle), and the stabilized subject using my approach (right).

<video width="100%" src="{{ "/videos/kdenlive/teaser_c.mp4" | absolute_url }}" autoplay loop muted>Your browser does not support the video tag.</video>
*The original clip used in this demonstration is [available here]({{ "/videos/kdenlive/test_clip_c.mp4" | absolute_url }}).

We can see that `vidstab` is able to stabilize some parts of the clip; notice how the car in the background is less shaky. But, in my opinion, the best clip is the one on the right, where the subject is stable and positioned at the center of the clip.

# Tracking the Subject

The first thing we need to do is to get the position of our subject at every frame of the clip. For that, Kdenlive has a neat effect called "Auto Mask". Let's go ahead and add that to our clip. (The clip should have been placed in the timeline by now.)

<p><video width="100%" src="{{ "/videos/kdenlive/auto_mask.mp4" | absolute_url }}" autoplay loop muted>Your browser does not support the video tag.</video></p>

After adding the "Auto Mask", a blurred rectangle should have appeared in the preview area; we are going to resize it and reposition it to roughly match the size and location of a feature point in your subject. In our case, the subject is a person, so we are going to resize the box to be slightly bigger than their face.

Finally, making sure the timeline cursor is positioned at *the first frame of the clip*, we are going to press the "Analyse" button in the options of the "Auto Mask" effect. This will scan each frame of the clip to track the face of our subject. Once the process finishes, a <u>Tracking data</u> link should appear in the "Auto Mask" effect. Click that link. The data has now been copied into our clipboard.

The image below summarises the steps required so far.

!["auto mask" steps]({{ "/videos/kdenlive/auto_mask_steps.jpg" | absolute_url }})

# Processing the Tracking Data

Now that we have the tracking data in our clipboard, we are going to invert it. This will allow us to later use it as a *correction* for the position of each frame. To make things easier, I have automated this part of the process with a bit of JavaScript. So go ahead and follow the steps below.

<p>1. Specify the frame size of your project.</p>

<div style="margin-bottom: 15px;">
    Width: <input type="text" value="1920" id="myInput_w">
    Height: <input type="text" value="1080" id="myInput_h">
</div>

<p>2. Specify an offset to adjust the position of the subject in the frame. (Negative values are allowed.)</p>

<div style="margin-bottom: 15px;">
    Horizontal offset: <input type="text" value="0" id="myInput_xoffset">
    Vertical offset: <input type="text" value="0" id="myInput_yoffset">
</div>

<p>3. Paste the <i>tracking data</i> of the "Auto Mask" effect below, then click on the button.</p>

<div style="margin-bottom: 15px;">
    <textarea rows="5" cols="80" placeholder="Paste your data here..." id="myInput" style="max-width: 100%;"></textarea>
    <div class="tooltip">
        <button onclick="myFunction()" onmouseout="outFunc()">
            <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>Process and copy to clipboard
        </button>
    </div>
</div>

<p>4. The <b>new</b> <i>tracking data</i> is now living in your clipboard. Try to paste the text with <kbd>Ctrl</kbd> + <kbd>V</kbd> in a different window to see the result.</p>

# Stabilising the Clip

Let's go back to Kdenlive. We can now delete or hide the "Auto Mask" effect. Afterwards, we need to add a "Transform" effect, and use its options to import the keyframe correction data from our clipboard.

<div style="text-align: center;">
    <p><img src="{{ "/videos/kdenlive/transform_import.png" | absolute_url }}" alt="Transform import"></p>
    <p>A small window should pop-up. We need to select "Position" from the dropdown, and then click OK.</p>
    <p><video style="max-width: 100%;" src="{{ "/videos/kdenlive/import_position.mp4" | absolute_url }}" autoplay loop muted>Your browser does not support the video tag.</video></p>
</div>

And that is mostly it! If we playback the timeline, the clip should now be stabilised and focused on our subject. The only issue is that the frame is moving around, and we can see the black background of the project. A very easy workaround for this is to add a composition to our clip, and increase the zoom a bit, e.g., to 140%.

# The End

This is the end of the post. Thank you for getting this far! Feel free to leave a comment below.

<script src="{{ "/assets/js/kdenlive/clipboard.js" | absolute_url }}"></script>
