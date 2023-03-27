import {Schema, model} from "mongoose";

const CitySchema = new Schema( {
    name: {type: String, required: true}
})
const TopicSchema = new Schema( {
    name: {type: String, required: true}
})
const SectionSchema = new Schema( {
    name: {type: String, required: true},
    topic_id:{type:Schema.Types.ObjectId, ref:'Topic', required: true}
})
const LevelSchema = new Schema( {
    name: {type: String, required: true},
    section_id:{type:Schema.Types.ObjectId, ref:'Section', required: true}
})
const DurationSchema = new Schema( {
    name: {type: String, required: true}
})
const PeriodicitySchema = new Schema( {
    name: {type: String, required: true}
})
const TimeSchema = new Schema( {
    name: {type: String, required: true}
})
const FormatSchema = new Schema( {
    name: {type: String, required: true}
})
const NumberOfPeopleSchema = new Schema( {
    name: {type: String, required: true}
})
const AgeSchema = new Schema( {
    name: {type: String, required: true}
})
const RoleSchema = new Schema( {
    name: {type: String, unique:true, required: true, default:'USER'}
})
const UserSchema = new Schema( {
    email:{type: String, required:true, unique: true},
    password:{type: String, required:true},
    role:{type:Schema.Types.ObjectId, ref:'Role', required: true},
    name: {type: String, required: true},
    gender:{type:String, required:true},
    birthDate:{type: Date, required:true},
    socialNetwork:{type:String},
    info:{type:String}
})
const CardSchema = new Schema( {
    name: {type: String, required: true},
    owner:{type: Schema.Types.ObjectId, ref:'User', required:true},
    level:{type:Schema.Types.ObjectId, ref:'Level', required:true},
    duration:{type:Schema.Types.ObjectId, ref:'Duration', required:true},
    periodicity:{type:Schema.Types.ObjectId, ref:'Periodicity', required:true},
    time:{type:Schema.Types.ObjectId, ref:'Time', required:true},
    format:{type:Schema.Types.ObjectId, ref:'Format', required:true},
    city_id:{type:Schema.Types.ObjectId, required:true},
    numberOfPeople:{type:Schema.Types.ObjectId, ref:'NumberOfPeople', required:true},
    gender:{type:String, required:true},
    age:{type:Schema.Types.ObjectId, ref:'Age', required:true},
    participants:[{type:Schema.Types.ObjectId, ref:'User', required:true}]

})

const City = model('City', CitySchema)
const Topic = model('Topic', TopicSchema)
const Section = model('Section', SectionSchema)
const Level = model('Level', LevelSchema)
const Duration = model('Duration', DurationSchema)
const Periodicity = model('Periodicity', PeriodicitySchema)
const Time = model('Time', TimeSchema)
const Format = model('Format', FormatSchema)
const NumberOfPeople = model('Number_op_people', NumberOfPeopleSchema)
const Age = model('Age', AgeSchema)
const Role = model('Role', RoleSchema)
const User = model('User', UserSchema)
const Card = model('Card', CardSchema)

export {
    City,
    Topic,
    Section,
    Level,
    Duration,
    Periodicity,
    Time,
    Format,
    NumberOfPeople,
    Age,
    Role,
    User,
    Card
}