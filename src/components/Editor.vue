<template>
  <div class="hello">
    <div class="rename" id="rename">
      <div class="rename-bloc">
        <h1 class="rename-bloc-title">Change the name of this project</h1>
        <input
          class="rename-bloc-input"
          type="text"
          id="name"
          name="name"
          value="Project name"
          required
        />
        <div class="rename-bloc-button">
          <a href="#" class="cta cta-yellow">Rename this project</a>
          <a href="#" class="cta cta-blank" onclick="divVisibility('rename');">Cancel</a>
        </div>
      </div>
    </div>
    <div class="delete" id="delete">
      <div class="delete-bloc">
        <h1 class="delete-bloc-title">This action can not be undone, are you sure ?</h1>
        <div class="delete-bloc-button">
          <a href="#" class="cta cta-red">Delete</a>
          <a href="#" class="cta cta-blank" onclick="divVisibility('delete');">Cancel</a>
        </div>
      </div>
    </div>
    <div class="link" id="link">
      <div class="link-bloc">
        <h1 class="link-bloc-title">
          Copy this <span class="link-bloc-title-yellow">private</span> link in your broadcaster.
        </h1>
        <div class="link-bloc-button">
          <input
            class="link-bloc-input"
            type="password"
            id="linkURL"
            name="link"
            value="gp762nuuoqcoxypju8c569th9wz7q5"
            readonly
          />
          <a href="#" class="cta cta-yellow">Copy</a>
          <a href="#" class="cta cta-blank" onclick="divVisibility('link');">Cancel</a>
        </div>
        <div class="link-bloc-subtitle">
          Please do not share this link with anyone and do not show this link during a stream!
          Neither avatchat nor admins will ask this information.
        </div>
      </div>
    </div>

    <header>
      <div class="logotype"><a href="#">Ac</a></div>
      <div class="account">
        BastiUI /<button class="account-project" onclick="divVisibility('accountProject');">
          Overlay pictures chat<span class="gg-chevron-down"></span>
        </button>
        <div class="account-bloc" id="accountProject">
          <button class="account-bloc-input" onclick="divVisibility('link');">
            Copy private link
          </button>
          <button class="account-bloc-input" onclick="divVisibility('rename');">Rename</button>
          <button
            class="account-bloc-input account-bloc-input-red"
            onclick="divVisibility('delete');"
          >
            Delete
          </button>
        </div>
      </div>
      <div class="nav">
        <button
          class="nav-account cta cta-gray"
          id="account"
          onclick="divVisibility('accountBloc');"
        >
          My account
        </button>
        <div class="nav-bloc" id="accountBloc">
          <button class="nav-bloc-input" id="logout">Disconnect</button>
          <div class="nav-bloc-option">Danger zone</div>
          <button
            class="nav-bloc-input nav-bloc-input-red"
            id="revokeURL"
            onclick="divVisibility('delete');"
          >
            Revoke all widgets URLs
          </button>
          <button
            class="nav-bloc-input nav-bloc-input-red"
            id="deleteAccount"
            onclick="divVisibility('delete');"
          >
            Delete your account
          </button>
        </div>
      </div>
    </header>

    <div class="container">
      <aside>
        <div class="bloc">
          <div class="bloc-header">
            <h2 class="bloc-header-title">Overlay pictures chat</h2>
            <button class="bloc-header-add" onclick="divVisibility('add');">
              <span class="gg-chevron-left"></span>
            </button>
          </div>
          <div class="bloc-menu">
            <ul class="bloc-menu-list">
              <li>
                Colors
                <ul class="bloc-menu-list-options">
                  <li class="bloc-menu-list-options-input">
                    <label for="backgroundColor">Background</label>
                    <input
                      class="bloc-menu-list-options-input-value"
                      type="text"
                      size="4"
                      id="backgroundColor"
                      name="backgroundColor"
                      value="#FAFF00"
                      onchange="changeBackgroundColor();"
                    />
                    <div class="bloc-menu-list-options-input-color" id="backgroundColorValue"></div>
                  </li>
                  <li class="bloc-menu-list-options-input">
                    <label for="blockColor">Avatar block</label>
                    <input
                      class="bloc-menu-list-options-input-value"
                      type="text"
                      size="4"
                      id="blockColor"
                      name="blockColor"
                      value="#FAFF00"
                      onchange="changeBlockColor();"
                    />
                    <div class="bloc-menu-list-options-input-color" id="blockColorValue"></div>
                  </li>
                  <li class="bloc-menu-list-options-input">
                    <label for="textColor">Text</label>
                    <input
                      class="bloc-menu-list-options-input-value"
                      type="text"
                      size="4"
                      id="textColor"
                      name="textColor"
                      value="#FAFF00"
                      onchange="changeTextColor();"
                    />
                    <div class="bloc-menu-list-options-input-color" id="textColorValue"></div>
                  </li>
                </ul>
              </li>
              <li>
                Grid
                <ul class="bloc-menu-list-options">
                  <li class="bloc-menu-list-options-input">
                    <label for="column">Column</label>
                    <div class="bloc-menu-list-options-input-button number-input">
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="minus"
                      ></button>
                      <input
                        class="quantity"
                        min="0"
                        name="column"
                        id="column"
                        value="4"
                        type="number"
                      />
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="plus"
                      ></button>
                    </div>
                  </li>
                  <li class="bloc-menu-list-options-input">
                    <label for="gap">Gap</label>
                    <div class="bloc-menu-list-options-input-button number-input">
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="minus"
                      ></button>
                      <input
                        class="quantity"
                        min="0"
                        name="gap"
                        id="gap"
                        value="20"
                        type="number"
                      />
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="plus"
                      ></button>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                Others
                <ul class="bloc-menu-list-options">
                  <li class="bloc-menu-list-options-input">
                    <label for="delay">Delay</label>
                    <div class="bloc-menu-list-options-input-button number-input">
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="minus"
                      ></button>
                      <input
                        class="quantity"
                        min="0"
                        name="delay"
                        id="delay"
                        value="4"
                        type="number"
                        step="0.5"
                      />
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="plus"
                      ></button>
                    </div>
                  </li>
                  <li class="bloc-menu-list-options-input">
                    <label for="timeout">Timeout</label>
                    <div class="bloc-menu-list-options-input-button number-input">
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="minus"
                      ></button>
                      <input
                        class="quantity"
                        min="0"
                        name="timeout"
                        id="timeout"
                        value="10"
                        type="number"
                      />
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="plus"
                      ></button>
                    </div>
                  </li>
                  <li class="bloc-menu-list-options-input">
                    <input type="checkbox" id="displayName" name="displayName" checked />
                    <label for="displayName" class="bloc-menu-list-options-input-checkbox"
                      >Display name</label
                    >
                  </li>
                  <li class="bloc-menu-list-options-input">
                    <label for="borderRadius">Border radius</label>
                    <div class="bloc-menu-list-options-input-button number-input">
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        class="minus"
                      ></button>
                      <input
                        class="quantity"
                        min="0"
                        name="borderRadius"
                        id="borderRadius"
                        value="4"
                        type="number"
                      />
                      <button
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        class="plus"
                      ></button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="bloc-footer">
            <button class="bloc-footer-cta cta cta-yellow" onclick="divVisibility('link');">
              Launch
            </button>
          </div>
        </div>
      </aside>

      <main>
        <div class="title">Preview</div>
        <div class="bloc"></div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
$backgroundColor: #0e0e0e;
$backgroundGray: #121212;
$primaryColor: #faff00;
$secondaryColor: #ededed;
$thirdColor: #bebebe;
$gray: #505050;
$ctaGray: #1d1d1d;
$ctaGrayHover: #242424;
$red: #d33e3e;
$fontspath: "~@/assets/fonts/";

*,
::before,
::after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: $ctaGray;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: $ctaGrayHover;
}

button {
  font-family: Cereal, Arial, Helvetica, sans-serif;
}

input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.number-input {
  display: inline-flex;
}

.number-input,
.number-input * {
  box-sizing: border-box;
}

.number-input button {
  outline: none;
  background-color: $ctaGrayHover;
  color: $gray;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  font-weight: 300;
  font-size: 16px;
  cursor: pointer;
  margin: 0;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $thirdColor;
    filter: brightness(150%);
  }
}

.number-input button::after {
  display: inline-block;
  position: absolute;
  transform: translate(-50%, -50%) rotate(180deg);
}

.number-input button.minus::after {
  content: "-";
  margin-top: 2px;
}

.number-input button.plus::after {
  content: "+";
}

.number-input input[type="number"] {
  max-width: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  color: $gray;
  font-size: 14px;
  text-align: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: $thirdColor;
  }
}

input[type="checkbox"] + label {
  display: block;
  cursor: pointer;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label::after {
  content: "\2713";
  border: none;
  background-color: $ctaGrayHover;
  border-radius: 3px;
  display: inline-block;
  width: 24px;
  height: 24px;
  padding-left: 7px;
  padding-top: 2px;
  transform: translateY(-4px);
  color: transparent;
  transition: filter 0.3s ease-in-out;
}

input[type="checkbox"]:hover + label::after {
  filter: brightness(150%);
}

input[type="checkbox"]:checked + label::after {
  color: $thirdColor;
}

body {
  background-color: $backgroundColor;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealLight300.ttf") format("truetype");
  font-weight: 300;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealBook400.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealMedium500.ttf") format("truetype");
  font-weight: 500;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealBold700.ttf") format("truetype");
  font-weight: 700;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealExtraBold800.ttf") format("truetype");
  font-weight: 800;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealBlack900.ttf") format("truetype");
  font-weight: 900;
}

.hello {
  font-family: "Cereal", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: $secondaryColor;
}

.rename {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10;
  display: none;
  justify-content: center;

  &-bloc {
    display: flex;
    flex-direction: column;
    margin-top: 25vh;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 636px;
      margin-bottom: 30px;
    }

    &-input {
      outline: none;
      background-color: transparent;
      margin-bottom: 30px;
      padding: 16px 16px;
      color: $secondaryColor;
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid $thirdColor;
    }

    &-button {
      display: flex;

      :not(:first-child) {
        margin-left: 28px;
      }
    }
  }
}

.delete {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10;
  display: none;
  justify-content: center;

  &-bloc {
    display: flex;
    flex-direction: column;
    margin-top: 25vh;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 636px;
      margin-bottom: 30px;
    }

    &-button {
      display: flex;

      :not(:first-child) {
        margin-left: 28px;
      }
    }
  }
}

.link {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10;
  display: none;
  justify-content: center;

  &-bloc {
    display: flex;
    flex-direction: column;
    margin-top: 25vh;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 700px;
      margin-bottom: 30px;

      &-yellow {
        color: $primaryColor;
      }
    }

    &-input {
      outline: none;
      background-color: transparent;
      padding: 10px 16px;
      color: $secondaryColor;
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid $thirdColor;
      min-width: 350px;
    }

    &-button {
      display: flex;
      margin-bottom: 30px;

      :not(:first-child) {
        margin-left: 28px;
      }
    }

    &-subtitle {
      max-width: 545px;
      color: $thirdColor;
      font-size: 14px;
      font-weight: 300;
    }
  }
}

.container {
  display: flex;
}

header {
  display: grid;
  padding: 34px 66px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "logotype account nav";
  background-color: $backgroundGray;

  .logotype {
    grid-area: logotype;
    font-size: 24px;
    font-weight: 700;

    a {
      color: $primaryColor;
    }
  }

  .account {
    position: relative;
    grid-area: account;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: $gray;

    &-project {
      position: relative;
      display: flex;
      align-items: center;
      margin-left: 5px;
      padding-right: 20px;
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
      color: $thirdColor;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: $secondaryColor;
      }

      .gg-chevron-down {
        position: absolute;
        right: 0;
        top: -2px;
        transition: top 0.3s ease-in-out;

        --ggs: 0.5;
      }

      &:hover .gg-chevron-down {
        top: 2px;
      }
    }

    &-bloc {
      display: none;
      align-items: flex-start;
      flex-direction: column;
      position: absolute;
      top: 40px;
      padding: 8px 0;
      background-color: $ctaGray;
      border-radius: 4px;

      &-input {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        cursor: pointer;
        padding: 8px 18px;
        background-color: transparent;
        border: none;
        outline: none;
        color: $thirdColor;

        &:hover {
          background-color: $ctaGrayHover;
          color: $secondaryColor;
        }

        &-red {
          color: $red;

          &:hover {
            color: $red;
          }
        }
      }
    }
  }

  .nav {
    grid-area: nav;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &-bloc {
      z-index: 1;
      position: absolute;
      top: 75px;
      display: none;
      flex-direction: column;
      background-color: $ctaGray;
      padding-top: 8px;
      padding-bottom: 8px;
      border-radius: 4px;
      font-size: 14px;

      &-option {
        padding: 8px 18px;
        font-size: 12px;
        color: $red;
        overflow: hidden;

        &::after {
          content: "";
          display: inline-block;
          height: 0.5em;
          vertical-align: bottom;
          width: calc(100% - 79px);
          margin-right: -100%;
          margin-left: 10px;
          border-top: 1px solid $red;
        }
      }

      &-input {
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        width: 100%;
        border: 0;
        outline: 0;
        color: $thirdColor;
        background-color: inherit;
        padding: 8px 18px;

        &-red {
          color: $red;
        }

        &:hover {
          background-color: $ctaGrayHover;
        }
      }
    }
  }
}

aside {
  background-color: $ctaGray;
  width: max-content;
  min-width: 300px;
  height: calc(100vh - 102px);
  position: relative;

  .bloc {
    display: flex;
    flex-direction: column;

    &-header {
      padding: 30px 24px;
      display: grid;
      grid-template-columns: 4fr 1fr;
      grid-template-areas: "text icon";
      border-bottom: 1px solid $ctaGrayHover;

      &-title {
        grid-area: text;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 214px;
      }

      &-add {
        display: flex;
        align-items: center;
        justify-self: flex-end;
        cursor: pointer;
        grid-area: icon;
        border: 0;
        outline: 0;
        background-color: inherit;
        color: $thirdColor;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: $primaryColor;
        }
      }
    }

    &-menu {
      display: flex;
      flex-direction: column;
      margin-top: 22px;
      color: $thirdColor;

      &-list {
        position: relative;
        padding: 10px 24px;
        color: $secondaryColor;
        font-size: 14px;

        &-options {
          padding: 10px 18px;
          color: $thirdColor;

          &:last-child {
            margin-bottom: 18px;
          }

          &-input {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &-value {
              position: absolute;
              right: calc(0px + 54px);
              background-color: transparent;
              color: $gray;
              border: none;
              outline: none;
              padding: 5px 4px;
              transition: color 0.3s ease-in-out;

              &:hover {
                color: $thirdColor;
              }
            }

            &-color {
              position: absolute;
              right: calc(0px + 24px);
              border-radius: 3px;
              height: 24px;
              width: 24px;
              background-color: #faff00;
            }

            &-checkbox {
              &::after {
                position: absolute;
                right: calc(0px + 24px);
              }
            }

            &-button {
              position: absolute;
              right: calc(0px + 24px);
            }

            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }
      }
    }

    &-footer {
      padding: 30px 24px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      &-cta {
        width: calc(300px - 48px);
      }
    }
  }
}

main {
  padding: 30px 60px;
  overflow-y: auto;
  height: calc(100vh - 102px);

  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 28px;
  }
}

.cta {
  display: block;
  width: max-content;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 14px;

  &-yellow {
    padding: 12px 44px;
    background-color: $primaryColor;
    color: $backgroundColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
    }
  }

  &-red {
    padding: 12px 44px;
    background-color: $red;
    color: $thirdColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $secondaryColor;
      transform: translateY(-15%);
    }
  }

  &-gray {
    padding: 8px 18px;
    background-color: $ctaGray;
    color: $thirdColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $secondaryColor;
      background-color: $ctaGrayHover;
    }
  }

  &-blank {
    padding: 12px 44px;
    color: $thirdColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
      background-color: #121212;
    }
  }
}
</style>
