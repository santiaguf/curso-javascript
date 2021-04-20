/* eslint-disable no-alert */
/* eslint-disable no-console */

const edadSantiago = window.prompt('qué edad tienes?');
const mayoriaEdad = 18;

if (edadSantiago >= mayoriaEdad) {
  console.log('usted es mayor de edad');
} else {
  console.log('usted es menor de edad');
}
