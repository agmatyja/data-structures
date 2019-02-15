var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

for (var i = 0; i < data.length; i++ ) {
	var clazz = '';
	for (var a = 0; a <data[i].categories.length; a++) {
		clazz = clazz + (data[i].categories[a]) + ' ';
	}
	
	document.write(
		'<div id="' + data[i].id + '" ' + 'class="' + clazz + '">' + 
			'<h1>' + data[i].title + '</h1>'  + 
			data[i].content + 
		'</div>'
	);
}
