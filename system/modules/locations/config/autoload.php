<?php

/**
 * Locations - Location Plugin for Contao
 *
 * Copyright (C) 2018 Andrew Stevens
 *
 * @package    asconsulting/locations
 * @link       http://andrewstevens.consulting
 * @license    http://opensource.org/licenses/lgpl-3.0.html
 */


/**
 * Register the classes
 */
ClassLoader::addClasses(array
(
    'Asc\Module\LocationsList' 	=> 'system/modules/locations/library/Asc/Module/LocationsList.php',
	'Asc\Backend\Locations' 	=> 'system/modules/locations/library/Asc/Backend/Locations.php',
	'Asc\Model\Location' 		=> 'system/modules/locations/library/Asc/Model/Location.php',
	'Asc\Locations'		 		=> 'system/modules/locations/library/Asc/Locations.php',
));

/**
 * Register the templates
 */
TemplateLoader::addFiles(array
(
    'mod_locations_list' 	=> 'system/modules/locations/templates/modules',
	'item_location' 		=> 'system/modules/locations/templates/items',
));
