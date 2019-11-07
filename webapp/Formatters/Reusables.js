sap.ui.define([],
	function () {
		return {

			fnOnFormatDate: function (date) {
				var formattedDate = date.substring(0, 2) + "." + date.substring(2, 4) + "." + date.substring(4);
				return formattedDate;
			},

			fnReturnStatus: function (profile) {
				if (profile === "B") {
					return "Backend";
				} else if (profile === "FE") {
					return "Frontend";
				} else if (profile === "FU") {
					return "Fullstack";
				} else {
					return "NOT DEFINED";
				}
			}
		};
	});