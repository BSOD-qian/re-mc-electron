document.getElementById("min").addEventListener("click", function(){
  window.electronAPI.min()
});
document.getElementById("max").addEventListener("click", function(){
  window.electronAPI.max()
});
document.getElementById("close").addEventListener("click", function(){
  window.electronAPI.close()
});