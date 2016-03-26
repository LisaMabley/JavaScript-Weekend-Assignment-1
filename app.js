var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var claimList = [claim1, claim2, claim3, claim4, claim5];
var totalPayedOut = 0;

// Add new claims
claimList.push(new Claim('Lisa Mabley', 'Mental Health', 100));
claimList.push(new Claim('Greg Schultz', 'Primary Care', 75));
claimList.push(new Claim('Grace Jones', 'Specialist', 225));
claimList.push(new Claim('Melissa Maynard', 'Primary Care', 300));
claimList.push(new Claim('Frank Zappa', 'Emergency', 316));
claimList.push(new Claim('Sarah Silverman', 'Emergency', 452));
claimList.push(new Claim('Robin Williams', 'Primary Care', 560));
claimList.push(new Claim('Henry Higgins', 'Specialist', 485));
claimList.push(new Claim('Maryanne Marshall', 'Specialist', 225));

// Process claims
for (var i = 0; i < claimList.length; i++) {
	setPercentCovered(claimList[i]);
	setCoveredAmount(claimList[i]);
}

// Log result
console.log('Company liability for all claims: $' + totalPayedOut.toLocaleString());

// Constructor
function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

// Determine percent covered and set claim variable
function setPercentCovered(claim) {

	switch(claim.visitType) {
		case 'Emergency':
			claim.percentCovered = 1;
			break;

		case 'Primary Care':
			claim.percentCovered = 0.5;
			break;

		case 'Specialist':
			claim.percentCovered = 0.1;
			break;

		default:
			// Covers Optical and any other uncovered providers
			claim.percentCovered = 0.0;
			break;
	}
}

// Determine amount covered and set claim variable
function setCoveredAmount(claim) {
	
	if (claim.percentCovered) {
		claim.amountCovered = parseInt(claim.visitCost * claim.percentCovered);
		totalPayedOut += claim.amountCovered;
		console.log('Paid out $' + claim.amountCovered.toLocaleString() + ' for ' + claim.patientName);

	} else {
		console.log('This claim is not covered. Please call customer service at 1-Not-Our-Prob to appeal this decision.');
	}
}
