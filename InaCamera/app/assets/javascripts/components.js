//= require_tree ./components
$(function() {
  $(window).on("hashchange", function() {
    let hash = location.hash;
    alert(hash);
  });
});
