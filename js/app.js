var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.level = ko.observable('Kitten');
	this.imgSrc = ko.observable('img/cat1.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

		if (this.clickCount() >= 6) {
			this.level('Junior');
		}

		else if (this.clickCount() >= 24) {
			this.level('Prime');
		}

		else if (this.clickCount() >= 84) {
			this.level('Mature');
		}

		else if (this.clickCount() >= 120) {
			this.level('Senior');
		}

		else if (this.clickCount() >= 168) {
			this.level('Geriatric');
		}
	};
}

ko.applyBindings(new ViewModel());