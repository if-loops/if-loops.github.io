(function(){
  document.querySelectorAll('.pub-row[tabindex]').forEach(function(row){
    function toggle(){
      var open = row.classList.toggle('expanded');
      row.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    row.setAttribute('aria-expanded', 'false');
    row.addEventListener('click', function(e){
      if (e.target.closest('a')) return;
      toggle();
    });
    row.addEventListener('keydown', function(e){
      if (e.target.closest('a')) return;
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggle();
      }
    });
  });
})();
