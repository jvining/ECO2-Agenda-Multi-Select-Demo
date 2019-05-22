$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$.fn.toggleAttr = function(attr, val) {
  var test = $(this).attr(attr);
  if ( test ) { 
	  $(this).removeAttr(attr);
  } else {
	  $(this).attr(attr, val);
  }
  return this;
};

$(document).ready(function() {
    $('input[type=checkbox][name=group1]').on('change', function()  {
		if (this.value == 'bg-info') {
			$('.card.bg-info').toggleAttr('hidden', "true");
		} 
		if (this.value == 'bg-success') {
			$('.card.bg-success').toggleAttr('hidden', "true");
		} 
		if (this.value == 'bg-danger') {
			$('.card.bg-danger').toggleAttr('hidden', "true");
		} 
		if (this.value == 'bg-warning') {
			$('.card.bg-warning').toggleAttr('hidden', "true");
		} 
	});
});

$('.filter-button-reset').click(function() {
	$(".card").attr('hidden',false);
    $('input[type=checkbox][name=group1]').prop('checked', true);
	
});
 