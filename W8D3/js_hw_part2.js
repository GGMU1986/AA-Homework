function titleize(names, callback) {
    Array.prototype.map(name => {
        callback(`Mx. ${name} Jingleheimer Schmidt`);
    })
};

let callback = function(names) {
    names.forEach(name => {
        console.log(name)
      }) 
    };

