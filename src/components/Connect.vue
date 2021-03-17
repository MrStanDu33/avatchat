<template>
  <div class="hello">
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
$color-citrus: #faff00;
$color-black: #0e0e0e;
$color-coal: #1d1d1d;
$color-gray: #242424;
$color-moon: #505050;
$color-silver: #bebebe;
$color-snow: #ededed;
$color-warning: #d33e3e;
$backgroundGray: #121212;

@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

*,
::before,
::after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  background-color: $color-black;
}

button {
  font-family: "Archivo", Arial, Helvetica, sans-serif;
}

.hello {
  font-family: "Archivo", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: $color-snow;
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
    background-color: $color-citrus;
    color: $color-black;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
    }
  }

  &-blank {
    padding: 12px 44px;
    color: $color-silver;
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
      color: $color-citrus;
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

@media screen and (max-width: 720px) {
  main {
    .bloc {
      &-title {
        font-size: 36px;
      }

      .button {
        flex-direction: column;
        justify-content: center;

        a:not(:first-child) {
          margin-left: 0;
          margin-top: 24px;
        }
      }
    }
  }
}
</style>
