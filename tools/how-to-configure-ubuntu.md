# How To Configure Ubuntu

In this article, I want to talk about the Linux operating system, and specifically about how to assemble a workstation from a minimal image and fully configure it for various purposes.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Choosing a distribution kit: I first saw this method when installing Arch Linux, when the entire installation is done by entering commands into the terminal. This gives the maximum installation flexibility, but I'm more used to using Ubuntu at work.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Earlier I collected various Linux images, since almost all the necessary programs were preinstalled and configured in them, and most importantly the graphical interface, but in the end, most of the programs had to be removed, which makes me do double the amount of work.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

In this article, I will use Ubuntu as an example, since I have tried this method more than a dozen times and I remember most of the commands, package names, and so on.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Briefly about the approach. For this approach, I will use a minimal Ubuntu image or Ubuntu Mini. This is Ubuntu version 20.04, which is not the latest, but I think it will not be difficult to upgrade to the latest one already on the installed system if necessary. Although in the comments on Reddit, you can find that you need to use Ubuntu Server to install the minimum version, but I have not tried this option yet, since I use the old and proven one. I really like the fact that the image is less than 100 MB and uses the TUI installer.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

If you are installing Linux for the first time, I recommend using the following guide on a virtual machine, and in general, it is a good practice to test the functionality of new operating systems.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

### **Let's move on to the installation.**

During the installation, I will only cover the main points, since when installing on a virtual machine you do not have to think too much about long-term use.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-5a026te.jpeg&w=3840&q=75)

Start screen. We choose install.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-5z126np.jpeg&w=3840&q=75)

We choose the language of the system. I recommend choosing English, later this can be changed if necessary.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-8j226gs.jpeg&w=3840&q=75)

We choose No. Configure the keyboard manually. Select in the following windows English \(US\), English \(US\).![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-xj326g3.jpeg&w=3840&q=75)

We set a name for the computer. It should be noted that not all special characters are available.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-uq426ua.jpeg&w=3840&q=75)

Here we select the desired mirror for your or the nearest country for fast download. In the next window set proxy if needed.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-z652615.jpeg&w=3840&q=75)

Enter your full name and username on the next screen.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-xt6267r.jpeg&w=3840&q=75)

Now let's move on to the partitioning of the disk. For a virtual machine, you can use the entire disk, if you want, you can partition it in your own way. I will be using the entire disk.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-yt726il.jpeg&w=3840&q=75)

This is how the entire disk markup looks. Then we are waiting for the installation of the base system.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-he826vt.jpeg&w=3840&q=75)

On this screen, I recommend disabling automatic updates.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-qc9263z.jpeg&w=3840&q=75)

List of available and configured packages. Part 1. You can choose nothing here.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-57a26f4.jpeg&w=3840&q=75)

List of available packages. Part 2. As you can see, graphical environments are already available here. Spoiler alert: we will install manually the one that is not on the list.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-r0b26i7.jpeg&w=3840&q=75)

Install GRUB bootloader by clicking Yes.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-fdc26in.jpeg&w=3840&q=75)

Installation completed. You can remove the image from the virtual machine.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-2ad261j.jpeg&w=3840&q=75)

First login. Be sure to export your virtual machine, this will allow you to roll back to a state where you have a clean system.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Now let's install an initial set of tools that can be useful for loading various scripts or repositories with programs:![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

```text
sudo apt install git curl wget htop -y
```

![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

### **Xorg and Xserver.**

Xorg is an X Window System server that allows the user to organize a graphical working environment for themselves.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

The X.org project is created and maintained as a free and open-source implementation of the X11 system. And it is also an X11-based desktop framework.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Xorg provides the interface between your hardware and the graphics software you want to run. In addition, Xorg is network-aware, which allows you to run a program on one system and look at another.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

### **Installing X-Server \(Xorg\)**

```text
sudo apt install xorg --no-install-recommends -y
```

![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

### **Choosing a Graphical Environment**

There are a huge number of different graphical environments. There are 2 main types: Window managers and Tiling managers. The tiling manager is different in that it tries to occupy the maximum available screen area, and the floating mode \(more familiar windows, you need to turn it on for each window\). Moreover, by default, the tiling manager supports many desktops at once, which simplifies the work and allows you to switch between desktops instead of windows, in turn, on which there may be more than one window. Also, a significant advantage is the lightness of the tiling over the window manager.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

 The main window manager options are: KDE, XFCE, LXQT, GNOME \(default Ubuntu Desktop Environment\), Budgie, Deepin.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Tiling managers include i3, awesome, xmonad, Qtile, dwm.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

I always look for interesting variations on [Reddit](https://www.reddit.com/r/unixporn?ref=hackernoon.com) where you can find very nice themes for the design and usually dotfiles \(prepared settings\).![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

_For now, I'll choose the i3 as an example._![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

### **Installing i3 and the Terminator Terminal Emulator:**

```text
sudo apt install i3 terminator -y
```

![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Before finishing, you need to install Display Manager. This is a graphical screen that appears at the end of the boot process instead of the standard command line prompt. The screen manager is a screen for entering a username and password to log in to the system. There are many screen managers, as well as desktop environments. Almost all display managers can be customized by changing their style and behavior.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

I will focus on the sddm I am used to. But there is a huge selection: console and graphical. A good example of the former is Ly, graphical examples: sddm, lightdm, xdm, gdm.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

Selecting the login window![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

```text
sudo apt install sddm -y
```

![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

### **Additional View Improvement Programs:**

* _**Conky**_ is a desktop add-on that allows you to dynamically display various system metrics. It has a very fine configuration and various themes.
* _**Feh**_ is a console utility for viewing images, can also be used as an image installer on the desktop.
* _**Compton**_ is a lightweight compositing manager for the X graphics server based on xcompmgr-dana that allows you to add different animations and transparency to different windows.

How it looks after the actions are taken:![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)![image](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F6WifzFKsrTU6u6nvz13jxc6dQ1O2-4ge26me.jpeg&w=3840&q=75)

You can see that i3 uses only 240 MB RAM.![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

### **Command to Set Desktop Wallpaper:**

```text
feh --bg-fil wallpaper.png
```

![](https://hackernoon.com/emojis/heart.png)![](https://hackernoon.com/emojis/light.png)![](https://hackernoon.com/emojis/money.png)![](https://hackernoon.com/emojis/thumbs-down.png)

This guide shows that with minimal knowledge, you can collect various combinations of the Linux operating system environment according to your preferences, as well as customize and decorate them in various ways.

