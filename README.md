# webSamplr2.0
### Sample/loop the web

**webSamplr2.0 features**
 
 - an improved UI and setup support
 - a karma~ based intuitive looper similar to Live's Simpler
 - an open source remote http server, updated every week 
 - tutorials and forums sections in the sources
 - spectogram and waveform w
indows
- an emergency kill switch

The list of sources are open to view at https://github.com/sandcobainer/websamplr-rest-api and can be easily edited. I plan to get rid of a lot of the existing links. The list gets updated within the plugin upon opening the plugin through a GET call. 

The plugin does not take any information from the user.

# **How does the sound get sampled?**
The sampling process remains the same using Soundflower. For Windows, look for audio routing alternatives like Jack audio, VB-Audio.

I explored other options such as recording audio into a buffer and dragging it into Ableton Live, but the process of dragging in audio files didn't seem intuitive and LIVE for my sampling process and playing music on the fly.


# Curated list of sample sources 


Websamplr 2.0 no longer uses the bulky physical SQLite database in the file system. Instead, we have a curated list of sources to sample from hosted [here](https://github.com/sandcobainer/websamplr-rest-api/) on my Github repository. 

I'm actively looking to improve this list as we go forward. Get rid of dead links and browser incompatible websites. Filters added: 

- Tutorials: I am actively looking for collaborators to feature their content within the plugin. If you have a web tutorial channel on Ableton Live or music production, you can contact me [here](https://sandcobainer.github.io/audioblog-/).

- Forums: I'm also trying to compile a solid list of forums to browse while using the sampler. Forums like Cycling'74, Ableton Live, Max for Live, r/ableton on Reddit. 

- Copyright Free (Beta): I made an attempt gathering copyright free audio sources on the web and connected to a button on the UI that toggles only Copyright Free sources. **This plugin does not guarantee the list of sources on this filter are completely copyright free**.


# *Audio routing flow*

The audio is intially generated in the M4L device and routed as follows. 

To replicate the routing flow in the image
- Download Soundflower for Mac, Jack Audio or VB-Audio for Windows and change system audio. 

Input Device: External Microphone
Output Device: Soundflower (ch.2)
   
- Setup Ableton Live preferences  

- Drag the .amxd M4L device onto ONE AUDIO track in Ableton Live. 

- Record arm all audio tracks in Ableton that are setup to record samples. 

- Use arrows and enter to navigate clips in Session View. 
# Watch webSamplr 2.0 in action!

[![webSamplr 2.0 Youtube](https://img.youtube.com/vi/6XijyJpCX8s/0.jpg)](https://youtu.be/6XijyJpCX8s)

<a class="gumroad-button" href="https://gum.co/websamplr?wanted=true" target="_blank">Get webSamplr 2.0 now</a>
