$(function(){

	var claim1 = {
		patientName: "John Doe",
		providerType: "Specialist",
		visitCost: 1100
	}

	var claim2 = {
		patientName: "Jane Doe",
		providerType: "Optical",
		visitCost: 100
	}

	var claim3 = {
		patientName: "Joe Johnson",
		providerType: "Emergency",
		visitCost: 31000
	}

	var claim4 = {
		patientName: "Sharon Smith",
		providerType: "Emergency",
		visitCost: 1300
	}

	var claim5 = {
		patientName: "Steve Wright",
		providerType: "Primary",
		visitCost: 770
	}

	var claimList = [claim1, claim2, claim3, claim4, claim5];
	var totalPayedOut = 0;

	// Add new claims
	claimList.push(new Claim('Lisa Mabley', 'Mental Health', 100));
	claimList.push(new Claim('Greg Schultz', 'Primary', 75));
	claimList.push(new Claim('Grace Jones', 'Specialist', 225));
	claimList.push(new Claim('Melissa Maynard', 'Primary', 300));
	claimList.push(new Claim('Frank Zappa', 'Emergency', 316));
	claimList.push(new Claim('Sarah Silverman', 'Specialist', 452));
	claimList.push(new Claim('Robin Williams', 'Primary', 560));
	claimList.push(new Claim('Henry Higgins', 'Emergency', 485));
	claimList.push(new Claim('Maryanne Marshall', 'Specialist', 225));

	// Process claims
	for (var i = 0; i < claimList.length; i++) {
		setPercentCovered(claimList[i]);
		setCoveredAmount(claimList[i]);
	}

	// Log result
	$('#paidClaims').append('<p>\nCompany liability for all claims: $' + totalPayedOut.toLocaleString() + '</p>');

	// Constructor
	function Claim(name, type, cost){
		this.patientName = name;
		this.providerType = type;
		this.visitCost = cost;
	}

	// Determine percent covered and set claim variable
	function setPercentCovered(claim) {

		switch(claim.providerType) {
			case 'Emergency':
				claim.percentCovered = 1;
				break;

			case 'Primary':
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

		var outputHTML = '';

		if (claim.percentCovered) {
			claim.amountCovered = parseInt(claim.visitCost * claim.percentCovered);
			totalPayedOut += claim.amountCovered;
			outputHTML = '<li><p>Company paid $' + claim.amountCovered.toLocaleString() + ' for ' + claim.providerType + ' care for ' + claim.patientName + '</p></li>';
			$("#paidClaims").append(outputHTML);

		} else {
			outputHTML = '<li><p>' + claim.providerType + ' care is not covered under ' + claim.patientName + '\'s current plan.</p></li>';
			$("#rejectedClaims").append(outputHTML);
		}
	}
});
