<template>
    <div class="presentation">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit deleniti architecto iure repellendus ut distinctio non sapiente provident rerum, doloremque rem soluta nesciunt iusto harum quidem? Possimus quas, labore libero quod repellat eos, ducimus nisi tempora fugit modi nobis magni doloremque mollitia nihil inventore ratione? Aperiam dolorem atque officia a voluptatibus, tempore rerum voluptatum veniam id architecto sint, recusandae reiciendis minima facilis optio ipsum deserunt quaerat? Iste, possimus atque.</p>
    
        <img src="@/assets/img/presentation.svg" alt="Presentation">
    </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>