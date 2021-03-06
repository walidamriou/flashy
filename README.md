# flashy
Minimalist tool to flash microcontrollers


<p align="center">
  <img width="70%" height="70%" src="https://github.com/walidamriou/flashy/blob/main/docs/img/v100/f1.PNG">
</p>

## Website 
https://flashy.walidamriou.com

## To develop 

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:


```bash
# Clone this repository
git clone https://github.com/walidamriou/flashy 
# Go into the repository
cd flashy
# Install dependencies
npm install 
# Run the app
npm start
```  
### Make Windows setup .exe 
```bash
# Make .exe setup for windows 32 bit
npm run dist_win32
#Or Make .exe setup for windows 64 bit
npm run dist_win64
```  

### Tested with 
- Renesas RL78/G14 R5F104GJA
- Renesas RL78/G14 R5F104AC
- Renesas RL78/G14 R5F104PJ

### Copyright CC 2021 Walid Amriou

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

__You are free to:__
- __Share__ copy and redistribute the material in any medium or format

__Under the following terms:__
- __Attribution__ You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

- __NonCommercial__ You may not use the material for commercial purposes.

- __NoDerivatives__ If you remix, transform, or build upon the material, you may not distribute the modified material.

- __No additional restrictions__ You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.


the software or Code or Scripts or any files in this source is provided "as is" and the author disclaims all warranties with regard to this files including all implied warranties of merchantability and fitness. in no event shall the author be liable for any special, direct, indirect, or consequential damages or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of this software or code or scripts or any files in this source.

The logo and the name of the project are owned by The original angel, and do not fall under the open license for reconstruction, it must be preserved in full without modification. 

### __This project used the open source & free tools and projects:__
- https://github.com/electron/electron
- https://github.com/google/material-design-lite
- https://github.com/msalau/rl78flash
- https://github.com/electron-userland/electron-builder
- https://github.com/node-usb/node-usb


This tool is not sufficiently accurate to work in the industrial environment. Use it with student prototyping and amateur development only. 
