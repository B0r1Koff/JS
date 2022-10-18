function Input(message){
    let a;
    while(isNaN(a) || a < 1){
        a = prompt(message);
    }
    return a;
}

// Cube:
function cubeVolume(a){
    return a**3;
}
function cubeArea(a){
    return 6*a**2
}

// Parallelepiped, Prism:
function Volume(s, h){
    return s*h;
}
function Area(s1, s2){
    return 2*Number(s1)+Number(s2);
}

// Cuboid:
function cuboidVolume(a, b, c){
    return a*b*c;
}
function cuboidArea(a, b, c){
    return 2*Number(a)*Number(b)+2*Number(a)*Number(c)+2*Number(b)*Number(c);
}

// Pyramid:
function pyramidVolume(s, h){
    return 1/3*s*h;
}
function pyramidArea(s1, s2){
    return Number(s1)+Number(s2);
}

let choice = 0;
let v = 0;
while(choice < 1 || choice > 5){
    choice = Input("Choose the type of figure : \n1 - Cube\n2 - Parallelepiped\n3 - Cuboid\n4 - Prism\n5 - Pyramid");
}

switch(choice){
    case "1":{
        let a = Input("Input the edge size of the cube : ");
        alert("Cube volume : " + cubeVolume(a) + "\nCube area : " + cubeArea(a));
        break;
    }
    case "2": case "4":{
        let baseArea = Input("Input the base area : "), sideSurfaceArea = Input("Input the side surface area : "), h = Input("Input h : ");
        alert("Volume : " + Volume(baseArea, h) + "\nArea : " + Area(baseArea, sideSurfaceArea));
        break;
    }
    case "3":{
        let a = Input("Input a : "), b = Input("Input b : "), c = Input("Input c : ");
        alert("Cuboid volume : " + cuboidVolume(a, b, c) + "\nCuboid area : " + cuboidArea(a, b, c));
        break;
    }
    case "5":{
        let baseArea = Input("Input the base area : "), sideSurfaceArea = Input("Input the side surface area : "), h = Input("Input h : ");
        alert("Pyramid volume : " + pyramidVolume(baseArea, h) + "\nPyramid area : " + pyramidArea(baseArea, sideSurfaceArea));
        break;
    }
}
