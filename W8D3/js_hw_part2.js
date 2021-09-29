let callback = function(names) {
    names.forEach(name => {
        console.log(name);
    }) 
};

function titleize(names, callback) {
    callback(names.map(name => `Mx. ${name} Jingleheimer Schmidt`)); 
};

titleize(["Mary", "Brian", "Leo"], callback);

