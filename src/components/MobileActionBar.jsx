import { BUSINESS, whatsappUrl, telUrl } from '../config';

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar" aria-label="Quick contact">
      <a href={telUrl()} className="mobile-action-bar__btn mobile-action-bar__btn--call">
        <span aria-hidden="true">📞</span>
        Call Now
      </a>
      <a
        href={whatsappUrl(`Hi ${BUSINESS.owner}, I would like to enquire about puppies.`)}
        className="mobile-action-bar__btn mobile-action-bar__btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true">💬</span>
        WhatsApp
      </a>
    </div>
  );
}
