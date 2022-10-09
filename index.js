function inc_variable(whatToInc,amouneToInc) {
	whatToIncLocal = document.getElementById(whatToInc)
	whatToIncLocal.textContent = Number(whatToIncLocal.textContent) + Number(amouneToInc)
}
