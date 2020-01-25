function biodata (data) {
    var biodataObj = {
        'name': 'Aisah',
        'age': 23,
        'address': 'Jl musholla annur, Tangerang Selatan',
        'hobbies': ['read', 'write', 'handcrafting', 'coding'],
        'is_married': false,
        'list_school': [ Degree = {'year_in': 2015, 'year_out': 2019, 'major': 'Geophysics'},
            High_School = {'year_in': 2012, 'year_out': 2015, 'major': 'Science'}
        ],
        'skills': [{
            'Ms. Office': 'Advanced',
            'GIS': 'Advanced',
            'HTML': 'beginner',
            'CSS': 'beginner',
            'JavaScript': 'beginner'
        }],
        'interest_in_coding': true
    }

    // var obj = JSON.parse(biodataObj)

    return biodataObj
}

console.log(biodata('aisyah'))
