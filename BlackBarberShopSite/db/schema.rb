# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150930201255) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "barbers", force: :cascade do |t|
    t.string   "name"
    t.integer  "experience"
    t.string   "avatar"
    t.integer  "barbershop_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "barbershops", force: :cascade do |t|
    t.string   "barbershopcity"
    t.string   "barbershopcountry"
    t.string   "barbershopfulladdress"
    t.string   "barbershopphone"
    t.string   "barbershopstate"
    t.string   "barbershopstreetaddress"
    t.string   "barbershopzipcode"
    t.string   "barbershopname"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.decimal  "latitude"
    t.decimal  "longitude"
  end

  create_table "opendates", force: :cascade do |t|
    t.integer  "closed"
    t.string   "day_of_the_week"
    t.integer  "open_time"
    t.integer  "barbershop_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "ratings", force: :cascade do |t|
    t.float    "rating"
    t.text     "recomendation"
    t.integer  "barber_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
