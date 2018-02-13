var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat1.jpg');
	this.nicknames = ko.observableArray(['Mr. T', 'Tabs', 'Tabtab']);

	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();

		if (clicks < 6) {
			level = 'Kitten';
		}

		else if (clicks < 24) {
			level = 'Junior';
		}

		else if (clicks < 84) {
			level = 'Prime';
		}

		else if (clicks < 120) {
			level = 'Mature';
		}

		else if (clicks < 168) {
			level = 'Senior';
		}

		else {
			level = 'Geriatric';
		}
		return level;
	}, this);
}


var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());