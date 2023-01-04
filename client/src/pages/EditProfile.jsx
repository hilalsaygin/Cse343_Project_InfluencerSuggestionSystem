import React from 'react';
import './editProfile.css';
import "./indexPages.css"
import Navbar from "./../components/navbar/Navbar"

const EditProfile = () => {
    return (
        <div>
        <style
          data-emotion="css-global cfyvqn"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              "\n        html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}@font-face{font-family:'DMSans';/*savepage-font-display=swap*/src:/*savepage-url=https://assets.mubicdn.net/static/fonts/DMSans-Regular.ttf*/url() format('truetype');}@font-face{font-family:'DMSans';/*savepage-font-display=swap*/src:/*savepage-url=https://assets.mubicdn.net/static/fonts/DMSans-Medium.ttf*/url() format('truetype');font-weight:500;}@font-face{font-family:'DMSans';/*savepage-font-display=swap*/src:/*savepage-url=https://assets.mubicdn.net/static/fonts/DMSans-Bold.ttf*/url() format('truetype');font-weight:bold;}@font-face{font-family:'DMSans';/*savepage-font-display=swap*/src:/*savepage-url=https://assets.mubicdn.net/static/fonts/DMSans-Italic.ttf*/url() format('truetype');font-style:italic;}@font-face{font-family:'DMSans';/*savepage-font-display=swap*/src:/*savepage-url=https://assets.mubicdn.net/static/fonts/DMSans-MediumItalic.ttf*/url() format('truetype');font-style:italic;font-weight:500;}@font-face{font-family:'DMSans';/*savepage-font-display=swap*/src:/*savepage-url=https://assets.mubicdn.net/static/fonts/DMSans-BoldItalic.ttf*/url() format('truetype');font-style:italic;font-weight:bold;}*{box-sizing:border-box;}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:DMSans,Helvetica,Arial,\"Lucida Grande\",sans-serif;font-size:14px;font-weight:300;line-height:1.4;}a{-webkit-text-decoration:none;text-decoration:none;}a,button{cursor:pointer;}strong,b{font-weight:bold;}i,em{font-style:italic;}button,input,textarea,select{font-family:DMSans,Helvetica,Arial,\"Lucida Grande\",sans-serif;}input,textarea{border-radius:0;font-size:14px;}input::-webkit-input-placeholder{color:#C8C8C8;}input::-moz-placeholder{color:#C8C8C8;}input:-ms-input-placeholder{color:#C8C8C8;}textarea::-webkit-input-placeholder{color:#C8C8C8;}textarea::-moz-placeholder{color:#C8C8C8;}textarea:-ms-input-placeholder{color:#C8C8C8;}input::placeholder,textarea::placeholder{color:#C8C8C8;}input::-webkit-outer-spin-button,textarea::-webkit-outer-spin-button,input::-webkit-inner-spin-button,textarea::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}input[type=number]{-moz-appearance:textfield;}.medium-zoom-overlay{z-index:10;}.medium-zoom-image--opened{z-index:11;}.grecaptcha-badge{visibility:hidden;}\n    ",
          }}
        />
        <style
          data-emotion="css-global"
          data-s
          data-savepage-sheetrules
          dangerouslySetInnerHTML={{
            __html: "\n        body { background-color: var(--color-bg); }\n    ",
          }}
        />

        <Navbar/>
          <div className="css-12xng7v">
            <div className="css-by1v3w">
{/*               <ul className="css-d4spgn">
                <li className="css-ni308u">
                  <a
                    name="account"
                    data-savepage-href="/account"
                    href="https://mubi.com/account"
                    className="css-1ljf7si"
                  >
                    Account
                  </a>
                </li>
                <li className="css-ni308u">
                  <a
                    href="https://mubi.com/subscription"
                    name="subscription"
                    className="css-naof45"
                  >
                    Log out
                  </a>
                </li>
              </ul> */}
              <section className="css-1f1bcew">
              <h1 class="css-kgulag">Hesap Ayarları</h1>
                <div className="css-ynrcfa">
                  <div className="css-vz13bi">
                    <h2 className="css-1sy31cf">Email adresini değiştir</h2>
                    <form>
                      <label htmlFor="email" className="css-1mknjcb">
                        Email adresi
                        <input
                          type="email"
                          id="email"
                          className="css-1gw1u1b"
                          defaultValue="ornek@mail.com"
                        />
                      </label>
                      <button
                        type="submit"
                        className="css-qlmbjq"
                        disabled
                      >
                        Email adresini güncelle
                      </button>
                    </form>
                  </div>
                  <div className="css-vz13bi">
                    <h2 className="css-1sy31cf">Şifreni değiştir</h2>
                    <form>
                      <label htmlFor="newPassword" className="css-8gzag4">
                        Yeni şifre
                        <input
                          type="password"
                          id="newPassword"
                          className="css-1gw1u1b"
                          defaultValue
                        />
                      </label>
                      <label
                        htmlFor="confirmPassword"
                        className="css-8gzag4 e1jao1d78"
                      >
                        Şifreyi onayla
                        <input
                          type="password"
                          id="confirmPassword"
                          className="css-1gw1u1b"
                          defaultValue
                        />
                      </label>
                      <button
                        type="submit"
                        className="css-qlmbjq"
                        disabled
                      >
                        Şifreyi güncelle
                      </button>
                    </form>
                  </div>
                  <form>
                    <div className="css-j3we6u ewhtlnr0">
                      <h2 className="css-1sy31cf e1jao1d710">Bilgileri değiştir</h2>
                      <label htmlFor="name" className="css-8gzag4 e1jao1d78">
                        İsim bilgisi
                        <input
                          type="text"
                          id="name"
                          className="css-1gw1u1b"
                          defaultValue="isim soyisim"
                        />
                        </label>
                        <button
                            type="submit"
                            className="css-qlmbjq"
                            disabled
                        >
                        Bilgileri güncelle
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      
/* 
        <div className="css-1ma0nfe">
            <div className="css-12xng7v">
                <div className="css-by1v3w">
                    <ul className="css-d4spgn">
                        <li class="css-ni308u eugzkiw1">
                            <a name="account" href="/account" class="css-1ljf7si eugzkiw0">Account</a>
                        </li>
                        <li class="css-ni308u eugzkiw1">
                            <a
                                href="https://mubi.com/subscription"
                                name="subscription"
                                class="css-naof45 eugzkiw0">Subscription</a>
                        </li>
                        <li class="css-ni308u eugzkiw1">
                            <a
                                name="e-mail preferences"
                                href="/account/preferences"
                                class="css-naof45 eugzkiw0">E-mail preferences</a>
                        </li>
                        <li class="css-ni308u eugzkiw1">
                            <a name="invite your friends" href="/referrals" class="css-naof45 eugzkiw0">Invite your friends</a>
                        </li>
                        <li class="css-ni308u eugzkiw1">
                            <a name="gift subscription" href="/gifts" class="css-naof45 eugzkiw0">Gift subscription</a>
                        </li>
                        <li class="css-ni308u eugzkiw1">
                            <a
                                name="video playback"
                                href="/account/preferences/video"
                                class="css-naof45 eugzkiw0">Video playback</a>
                        </li>
                        <li class="css-ni308u eugzkiw1">
                            <a name="logout" href="/logout" class="css-naof45 eugzkiw0">Log out</a>
                        </li>
            </ul>
            
                    <section className="css-1f1bcew">
                        <h1 class="css-kgulag">Account</h1>
                        <div class="css-ynrcfa e158zpq70">
                            <div class="css-vz13bi e1jao1d712">
                                <h2 class="css-1sy31cf e1jao1d710">Edit contact details</h2>
                                <form>
                                    <label for="email" class="css-1mknjcb e16aio3l1">Email address<input
                                        type="email"
                                        id="email"
                                        class="css-1gw1u1b e1jao1d74"
                                        value="aebuyuk@hotmail.com"/></label>
                                    <button
                                        type="submit"
                                        class=" e1jao1d73 e1yetvh23 css-qlmbjq e6xeocl0"
                                        disabled="">Update email address</button>
                                </form>
                            </div>
                            <div class="css-vz13bi e1jao1d712">
                                <h2 class="css-1sy31cf e1jao1d710">Change password</h2>
                                <form>
                                    <label for="newPassword" class="css-8gzag4 e1jao1d78">New password<input type="password" id="newPassword" class="css-1gw1u1b e1jao1d74" value=""/></label>
                                    <label for="confirmPassword" class="css-8gzag4 e1jao1d78">Confirm password<input
                                        type="password"
                                        id="confirmPassword"
                                        class="css-1gw1u1b e1jao1d74"
                                        value=""/></label>
                                    <button
                                        type="submit"
                                        class=" e1jao1d73 e1yetvh23 css-qlmbjq e6xeocl0"
                                        disabled="">Update password</button>
                                </form>
                            </div>
                            <form>
                                <div class="css-j3we6u ewhtlnr0">
                                    <h2 class="css-1sy31cf e1jao1d710">Edit info</h2>
                                    <label for="name" class="css-8gzag4 e1jao1d78">Name<input type="text" id="name" class="css-1gw1u1b e1jao1d74" value="k'loyi"/></label>
                                </div>


                                <div class="css-1v6s6ue e1jao1d711">
                                    <button type="submit" class=" e1yetvh23 css-k70ug1 e6xeocl0">Update account settings</button>
                                </div>
                                <a href="/account/deactivate" class="css-pkd4kw ewhtlnr1">Need to deactivate your account?</a>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div> */

    /*       <div className='edit-profile'>

        <div className="e17_55">
              <div className="e17_51">
                  <span className="e14_202">ŞİFREMİ DEĞİŞTİR</span></div>
        <div className='e17_56'>
                  <div className='e17_49'><span
                      className="e14_216">Eski Şifre </span>
      <div className="e14_209"></div><span  class="e14_215">Yeni Şifre </span>
      <div className="e14_211"></div>
    </div>
    <div className='e17_50'><span  class="e14_213">Değiştir</span></div>
  </div>
          </div>

    </div> */
    )
}

export default EditProfile;