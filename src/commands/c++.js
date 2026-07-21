
const commands = {
    data:{
    name: "cpp",
    description: "Learn C++",
    options: [
        {
            name: "type",
            description: "The type of C++ you are",
            type: 3,
            required: true,
            choices: [
                {
                    name: "cout",
                    value: "cout"
                },
                {
                    name: "cin",
                    value: "cin"
                },
                {
                    name: "variables",
                    value: "variables"
                }
            ]
        }
    ]},
    code: `
    $if[$option[type]==cout;
$codeBlock[
std::cout << "Hello World!":

cout << "Hello World!": // IF YOU HAVE using STD
;cpp]
$setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
$setGlobalVar[cpp;$math[$getGlobalVar[cpp]+1]]
$setUserVar[userCommands;$math[$getUserVar[userCommands]+1]]
]

$if[$option[type]==cin;
$codeBlock[
cin >> varName:

std::cin >> varName:
;cpp]
$setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
$setGlobalVar[cpp;$math[$getGlobalVar[cpp]+1]]
$setUserVar[userCommands;$math[$getUserVar[userCommands]+1]]
]
$if[$option[type]==variables;
$codeBlock[
int myInt = 25:
double myDoub = 1.82:
char myChar = 'A':
bool myBool = true:
std::string myStr = "Nyx":
;cpp]
$setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
$setGlobalVar[cpp;$math[$getGlobalVar[cpp]+1]]
$setUserVar[userCommands;$math[$getUserVar[userCommands]+1]]
]
    `
}

module.exports = commands