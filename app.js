(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = mushrooms;
	});

	var mushrooms = [
	{
		name: 'Matsutake',
		price: 40.00,
		description: 'Matsutake mushrooms have definitive spicy and clean aromatics and a pine-like fragrance when cooked.',
		canPurchase: true,
		soldOut: false,
		images: [
		{
			full: 'dodecahedron-01-full.jpg',
			thumb: 'dodecahedron-01-thumb.jpg'
		},
		{
			full: 'dodecahedron-02-full.jpg',
			thumb: 'dodecahedron-02-thumb.jpg'	
		}]
	},
	{
		name: 'Shiitake',
		price: 15.00,
		description: 'When cooked, shiitakes release a garlic-pine aroma and have a rich, earthy, umami flavor.',
		canPurchase: true,
		soldOut: false,
		images: [
		{
			full: 'pentagonal-01-full.jpg',
			thumb: 'pentagonal-01-thumb.jpg'
		},
		{
			full: 'pentagonal-02-full.jpg',
			thumb: 'pentagonal-02-thumb.jpg'	
		}]
	},
	{
		name: 'Chanterelle',
		price: 18.75,
		description: 'Their flavor is nutty, emitting savory aromatics, especially when cooked.',
		canPurchase: true,
		soldOut: false,
		images: [
		{
			full: 'pentagonal-01-full.jpg',
			thumb: 'pentagonal-01-thumb.jpg'
		},
		{
			full: 'pentagonal-02-full.jpg',
			thumb: 'pentagonal-02-thumb.jpg'	
		}]
	}
	];

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
})();