const React         = require('react');
const WallWidget    = require('./components/WallWidget');
const Conversations = require('./components/Conversations');

var MessagesModule = React.createClass({
  render: function() {
    return (
      <div className="container-fluid msg-container">
        <div className="section-left section-left--msg">
          <WallWidget
            title="Nachrichten"
            symbol="mail_outline"
            contentScrollable={true}
            contentFull={true}
          >
            <Conversations {...this.props} />
          </WallWidget>
        </div>

        <div className="section-center section-center--msg">
          <div className="msg-messages">
            <div className="msg-message msg-message--other">
              <img src="gfx/profilbilder/mike-schnorr.jpg" alt className="msg-message__avatar" />
              <header className="msg-message__meta">
                <a href="profile-about.html" className="msg-message__name">Mike Schnorr</a>
                <div className="msg-message__time">Vor 2 Stunden</div>
              </header>
              <div className="msg-message__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="msg-message msg-message--self">
              <img src="gfx/profilbilder/p4.jpg" className="msg-message__avatar" />
              <header className="msg-message__meta">
                <a href="profile-about.html" className="msg-message__name">Maxi Mustermann</a>
                <div className="msg-message__time">Vor 2 Stunden</div>
              </header>
              <div className="msg-message__content">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <div className="msg-input-area">
            <textarea placeholder="Schreibe eine Nachricht" rows={1} name="msg-input-area__text" id="msg-input-area__text" className="msg-input-area__text" defaultValue={""} />
            <a className="msg-input-area__send-a" href="#1"><i className="material-icons">send</i></a>
          </div>
        </div>

        <div className="section-right--msg">
          <aside className="wall-widget wall-widget--side wall-widget--msg">
            <header>
              <i className="material-icons">info_outline</i><h3>Kontaktinfo</h3>
            </header>
            <div className="wall-widget__content--scrollable">
              <img src="gfx/profilbilder/mike-schnorr.jpg" alt className="img-responsive" />
              <div className="msg-contact-detail">
                <div className="msg-contact-detail__title">Name</div>
                <div className="msg-contact-detail__text">Mike Schnorr</div>
              </div>
              <div className="msg-contact-detail">
                <div className="msg-contact-detail__title">Status</div>
                <div className="msg-contact-detail__text">Auf der Arbeit...</div>
              </div>
              <div className="msg-contact-detail">
                <div className="msg-contact-detail__title">Online Status</div>
                <div className="msg-contact-detail__text">zuletzt online heute 15:21</div>
              </div>
              <div className="msg-contact-detail">
                <div className="msg-contact-detail__title">Telefon</div>
                <div className="msg-contact-detail__text">+49 1743 9847304</div>
              </div>
            </div>
          </aside></div>
      </div>

    );
  }
})

module.exports = MessagesModule;
