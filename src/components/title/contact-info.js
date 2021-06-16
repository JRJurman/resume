import { registerHtml } from 'tram-one'
import './contact-info.css'

const html = registerHtml()

export default (props, children) => {
	return html`
		<section className="contact-info">${children}</section>
	`
}
