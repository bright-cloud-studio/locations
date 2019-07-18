(function($) {
$(document).ready(function() {
	
	$("select.locations_category_selector").change(function() {
		if ($(this).val() != '') {
			$("select.locations_state_selector").prop('disabled', false);
		}
		else {
			$("select.locations_state_selector").prop('disabled', true);
			$('select.locations_state_selector').prop('selectedIndex',0);
			
			  $('div.mod_locations_list').each(function(i, cte) {
				var module = $(this);
				var selector = module.find('select.locations_state_selector');
				module.find('div.state').hide();
			  });
		}
	});
	
  $('div.mod_locations_list').each(function(i, cte) {
	var module = $(this);
	var selector = module.find('select.locations_state_selector');
	var catSelector = module.find('select.locations_category_selector');
	var cat;
	module.find('div.state').hide();
	selector.change(function() {
		module.find('div.state').hide();		
		state = selector.find('option:selected').val();
		cat = catSelector.find('option:selected').val();
		alert(cat);
		var showEl = module.find('div.state_' + cat + '_' +state);
		if (showEl.length > 0) {
			showEl.show();
		} else {
			module.find('div.state_not_found').show();
		}
	});
  });
  $('div.mod_locations_list select.locations_state_selector').first().change();
});
})(jQuery);

