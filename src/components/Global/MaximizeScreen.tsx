/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from 'react'

const MaximizeScreen = () => {
	useEffect(() => {
		const elem = document.querySelector('.maximize-icon')
		if (elem) elem.setAttribute('data-toggle', 'fullscreen')
		return () => {
			if (elem) elem.removeAttribute('data-toggle')
		}
	}, [])

	/*
	 * toggle full screen mode
	 */
	const toggleFullScreen = () => {
		const document: any = window.document
		document.body.classList.add('fullscreen-enable')
		if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {
			// current working methods
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen()
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen()
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen()
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen()
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen()
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen()
			}
		}

		// handle fullscreen exit
		const exitHandler = () => {
			if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) document.body.classList.remove('fullscreen-enable')
		}
		document.addEventListener('fullscreenchange', exitHandler)
		document.addEventListener('webkitfullscreenchange', exitHandler)
		document.addEventListener('mozfullscreenchange', exitHandler)
	}

	return (
		<button data-toggle="fullscreen" type="button" className="nav-link p-2" onClick={toggleFullScreen}>
			<span className="sr-only">Fullscreen Mode</span>
			<span className="flex items-center justify-center">
				<i className="ri-fullscreen-line text-2xl"></i>
			</span>
		</button>
	)
}

export default MaximizeScreen
