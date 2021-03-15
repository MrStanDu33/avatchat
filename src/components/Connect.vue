<template>
  <div class="connect">
    <div class="container">
      <header>
        <div class="logotype"><a href="#">Ac</a></div>
      </header>
      <main>
        <div class="bloc">
          <h1 class="bloc-title">Get started your’s chat animated</h1>
          <div class="button">
            <a href="#" class="cta cta-yellow">Connect with Twitch account</a>
            <a href="#" class="cta cta-blank">Cancel</a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
$backgroundColor: #0e0e0e;
$primaryColor: #faff00;
$secondaryColor: #ededed;
$thirdColor: #bebebe;
$fontspath: "~@/assets/fonts/";

*,
::before,
::after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  background-color: $backgroundColor;
}

button {
  font-family: Cereal, Arial, Helvetica, sans-serif;
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
  font-family: Cereal, Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: $secondaryColor;
}

.container {
  padding: 40px 66px;
}

.cta {
  display: block;
  width: max-content;
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

header {
  .logotype {
    font-size: 24px;
    font-weight: 700;

    a {
      color: $primaryColor;
    }
  }
}

main {
  display: flex;
  justify-content: center;
  margin-top: 25vh;

  .bloc {
    display: flex;
    flex-direction: column;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 636px;
      margin-bottom: 30px;
    }

    .button {
      display: flex;

      a:not(:first-child) {
        margin-left: 28px;
      }
    }
  }
}
</style>
