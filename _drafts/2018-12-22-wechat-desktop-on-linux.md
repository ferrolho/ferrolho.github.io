---
title: "WeChat Desktop on Linux"
date: 2018-12-22 14:18:00 +0000
categories:
  - WeChat
tags:
  - Linux
  - Ubuntu 18.04
  - Wine
---

<link rel="stylesheet" href="{{ "/assets/css/custom/code_before.css" | relative_url }}">

大家好！
今天我向大家讲解如何在 Ubuntu 18.04 系统上安装微信桌面客户端。

This post describes how to install *WeChat for PC* on Ubuntu using Wine.  
More specifically, I will be using Ubuntu 18.04, but the procedure should be similar for other releases.

# Installing WineHQ

Install WineHQ according to the instruction in [https://wiki.winehq.org/Ubuntu](https://wiki.winehq.org/Ubuntu).  
Install the *staging branch* for the most up-to-date packages.

# Setup Wine

Open a terminal (<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>) and run the following commands:

```
export WINEARCH=win32
```
```
export WINEPREFIX=~/.wine32
```
```
winecfg
```

When you run the `winecfg` command for the first time, Wine will start to setup the required environment under the specified `WINEPREFIX`, which in this case we set to `~/.wine32`.

You should be prompted with the dialogues below. Choose **Install** for both.

<div id="wine-installers">
    <img class="mac-style-drop-shadow" src="{{ "/images/wechat/wine-mono-installer.png" | absolute_url }}" alt="Wine Mono Installer">
    <img class="mac-style-drop-shadow" src="{{ "/images/wechat/wine-gecko-installer.png" | absolute_url }}" alt="Wine Gecko Installer">
</div>

Finally, once both installers are finished, this window should appear:

<div style="text-align: center;"><img class="mac-style-drop-shadow" style="width: 60%;" src="{{ "/images/wechat/winecfg.png" | absolute_url }}" alt="winecfg"></div>

If you are using a HiDPI screen, it might be worth scaling the interface under *Screen resolution*, in the **Graphics** tab:

<div style="text-align: center;"><img class="mac-style-drop-shadow" style="width: 60%;" src="{{ "/images/wechat/winecfg-hidpi.png" | absolute_url }}" alt="winecfg"></div>

# Providing a Chinese font

For the Chinese characters to be rendered correctly we need to provide Wine with a Chinese font.
We will use `winetricks` for this, which is a helper script to download and install extra Wine stuff.

Download `winetricks`:
```
wget  https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
```

Set the executable flag:
```
chmod +x winetricks
```

Some winetricks "packages" require a few external tools to be installed. We need `cabextract`:
```
sudo apt install cabextract
```

And now we install the fonts and some other libraries:
```
./winetricks corefonts gdiplus riched20 riched30 wenquanyi
```

Finally, we need to edit `regedit` to enable the font we just installed.
**[Download this .reg file](https://gist.github.com/swordfeng/c3fd6b6fcf6dc7d7fa8a)**.

Open `regedit` with the command:
```
./winetricks regedit
```

The following window should show up:

<div style="text-align: center;"><img class="mac-style-drop-shadow" style="width: 80%;" src="{{ "/images/wechat/regedit.png" | absolute_url }}" alt="winecfg"></div>

In the Menu bar, click **Registry** and select **Import Registry File...**

When the browser shows up, select the *.reg* file you have just downloaded.
If successful, the following dialogue should greet you:

<div style="text-align: center;"><img class="mac-style-drop-shadow" style="width: 40%;" src="{{ "/images/wechat/regedit-ok.png" | absolute_url }}" alt="winecfg"></div>

# Installing WeChat

We are now ready to install WeChat itself.
Download the installer from [**here**](https://weixin.qq.com/cgi-bin/readtemplate?t=win_weixin&lang=en):

[![WeChat download page]({{ "/images/wechat/download-page.png" | absolute_url }})](https://weixin.qq.com/cgi-bin/readtemplate?t=win_weixin&lang=en)

Once the download has finished, install it by running:
```
wine ~/Downloads/WeChat_C1018.exe
```

> Please note that your installer might be more recent than the version shown here.
> As such, you might need to change `WeChat_C1018.exe` to whichever installer you have downloaded.

The installer should start. Click on *Install WeChat*.

<div style="text-align: center;"><img class="mac-style-drop-shadow" style="width: 60%;" src="{{ "/images/wechat/installer.png" | absolute_url }}" alt="Installer"></div>

# Final result

After the installation has completed, you may launch WeChat.
The application should be listed in the Applications drawer:

![Ubuntu dash icon]({{ "/images/wechat/launcher.jpg" | absolute_url }})

Stickers work too!

<div style="text-align: center;">
<video width="80%" class="mac-style-drop-shadow" autoplay loop muted src="{{ "/images/wechat/stickers.mp4" | absolute_url }}">
Your browser does not support the video tag.</video></div>

# System Tray on Gnome

If you are using *Gnome* on *Ubuntu 18.04* or a more recent release, chances are you will be greeted by this nasty windowed legacy system tray:

<div style="text-align: center;"><img class="mac-style-drop-shadow" style="width: 20%;" src="{{ "/images/wechat/legacy-system-tray.png" | absolute_url }}" alt="Installer"></div>

Install [**this Gnome Extension**](https://extensions.gnome.org/extension/1031/topicons/) and the problem will be gone:

![top-icons gnome extension]({{ "/images/wechat/top-icons-gnome-extension.png" | absolute_url }})

<script src="{{ "/assets/js/if-data-saver-on-video-autoplay-off.js" | absolute_url }}"></script>
