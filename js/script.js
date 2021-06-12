$(document).ready(function () {
	//todo -------------------------------------------------------                   Interactions          -------------------------------------------------------
	//! Draggable
	$("#draggable3").draggable({
		containment: "#containment-wrapper",
		scroll: false,
	});

	// !Droppable
	$("#draggable").draggable();
	$("#droppable").droppable({
		drop: function (event, ui) {
			$(this).addClass("ui-state-highlight").find("p").html("Dropped!");
		},
	});

	//! Resize
	$("#resizable").resizable();

	//! Selectable
	$("#selectable").selectable();

	//! Sortable
	$("#sortable").sortable();
	$("#sortable").disableSelection();

	//todo -------------------------------------------------------                   Widgets           -------------------------------------------------------
	// ! Accordion
	$("#accordion").accordion({
		collapsible: true,
	});

	// ! Autocomplete
	var availableCourse = [
		"HTML",
		"CSS",
		"Bootstrap",
		"JavaScript",
		"Jquery",
		"React JS",
		"Node JS",
		"Express JS",
		"Vue JS",
		"PHP",
		"Mongo DB",
		"My Sql",
		"Wordpress",
	];
	var availableEmail = [
		"@gmail.com",
		"@yahoo.com",
		"@hotmail.com",
		"@outlook.com",
	];
	$("#course").autocomplete({
		source: availableCourse,
	});
	$("#email").autocomplete({
		source: availableEmail,
	});

	// ! Date
	$("#datepicker").datepicker();

	// ! Dialog
	$("#dialog").dialog();

	//! Select
	$("#speed").selectmenu();

	$("#files").selectmenu();

	$("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

	$("#salutation").selectmenu();

  // ! Slider
  $('#slider').slider();

	// todo -------------------------------------------------------                   Effect           -------------------------------------------------------

	//! Animation
	var state = true;
	$("#button").on("click", function () {
		if (state) {
			$("#effect").animate(
				{
					backgroundColor: "#aa0000",
					color: "#fff",
					width: 500,
				},
				1000
			);
		} else {
			$("#effect").animate(
				{
					backgroundColor: "#fff",
					color: "#000",
					width: 240,
				},
				1000
			);
		}
		state = !state;
	});

	// ! Effect
	// run the currently selected effect
	function runEffect() {
		// get effect type from
		var selectedEffect = $(".effect_sec #effectTypes").val();

		// Most effect types need no options passed by default
		var options = {};
		// some effects have required parameters
		if (selectedEffect === "scale") {
			options = { percent: 50 };
		} else if (selectedEffect === "transfer") {
			options = { to: ".effect_sec #button", className: "ui-effects-transfer" };
		} else if (selectedEffect === "size") {
			options = { to: { width: 200, height: 60 } };
		}

		// Run the effect
		$(".effect_sec #effect").effect(selectedEffect, options, 500, callback);
	}

	// Callback function to bring a hidden box back
	function callback() {
		setTimeout(function () {
			$(".effect_sec #effect").removeAttr("style").hide().fadeIn();
		}, 1000);
	}

	// Set effect from select menu value
	$(".effect_sec #button").on("click", function () {
		runEffect();
		return false;
	});

	// ! Switch class
	$(".switch #button").on("click", function () {
		$(".newClass").switchClass("newClass", "anotherNewClass", 1000);
		$(".anotherNewClass").switchClass("anotherNewClass", "newClass", 1000);
	});

	// ! Toggle
	$(".toggle #button").on("click", function () {
		$(".toggle #tEffect").toggleClass("tNewClass", 1000);
	});
});
