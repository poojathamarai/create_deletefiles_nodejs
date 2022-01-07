const { readdirSync, rmSync } = require('fs');
const dir = 'backup';

readdirSync(dir).forEach(f => 
  {
    rmSync(`${dir}/${f}`)
    console.log(`Deleted ${dir}/${f}`)

});
