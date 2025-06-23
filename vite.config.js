// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })





// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/your-repo-name/',  // 👈 important! (match your repo name)
// });






import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// REPLACE `your-repo-name` with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: "/CowBoy_Front/",
})






