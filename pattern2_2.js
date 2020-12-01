const bank = 'XXYX XYYY XXXX YYYY'

const pattern_bank = /((x)|(y)|(z)){1,4}/ig

if(bank.match(pattern_bank)){
    console.log('VALID')
} else{
    console.log('NOT VALID');
}