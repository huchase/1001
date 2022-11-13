<template>
  <header m-10 flex justify-center>
    <Nav />
  </header>
  <main flex justify-center>
    <RouterView />
  </main>
  <StatBar font-sans fixed bottom-1 left-1 text-2xl />
  <WhereYouAre />
</template>
