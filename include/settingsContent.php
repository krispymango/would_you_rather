<div class="settings_bar_wrapper">
  <h2>Settings</h2>
    <h3>Music:</h3>
  <div style="text-align: center;margin:0px auto;width:50%;display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;">
<i onclick="PlayMusic()" style="background:#3498DB;height:6vh;line-height:6vh;" class="fas fa-lg fa-volume-up"></i>
<i onclick="PauseMusic()" style="background:#E74C3C;height:6vh;line-height:6vh;" class="fas fa-lg fa-volume-mute"></i>
  </div>
  <h3>Sfx:</h3>
<div style="text-align: center;margin:0px auto;width:20%;display:grid;grid-template-columns:repeat(1,1fr);grid-column-gap:10px;">
<i id="unmuteSfx" onclick="PlayPopSound()" class="fas fa-lg fa-volume-up"></i>
<i id="muteSfx" style="display:none;" onclick="PlayPopSound()" class="fas fa-lg fa-volume-mute"></i>
</div>
  <h3 style="display:none;">Dark/light Mode:</h3>
  <div style="display: none;text-align: center;margin:0px auto;width:20%;display:grid;grid-template-columns:repeat(1,1fr);grid-column-gap:10px;">
<i style="display: none;color: black;background:white;height:6vh;line-height:6vh;" class="fas fa-lg fa-adjust"></i>
  </div>
    <i onclick="HideSettingsBar()" class="fas fa-lg fa-times"></i>
</div>
