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

ActiveRecord::Schema.define(version: 20150111092337) do

  create_table "admins", force: true do |t|
    t.string   "email",              default: "", null: false
    t.string   "encrypted_password", default: "", null: false
    t.integer  "sign_in_count",      default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "failed_attempts",    default: 0
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "contribution_withdrawl_details", force: true do |t|
    t.string   "uan"
    t.text     "particulars"
    t.string   "particulars_type"
    t.float    "deposit_employee_share"
    t.float    "deposit_employer_share"
    t.float    "withdrawls_employee_share"
    t.float    "withdrawls_employer_share"
    t.float    "pension_contribution"
    t.integer  "user_profile_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "contribution_withdrawl_details", ["user_profile_id"], name: "index_contribution_withdrawl_details_on_user_profile_id"

  create_table "transfer_details", force: true do |t|
    t.string   "uan"
    t.string   "transfer_from_member_id"
    t.string   "transfer_from_office_id"
    t.float    "amount_employee_share"
    t.float    "amount_employer_share"
    t.date     "service_details_date_of_joining"
    t.date     "service_details_date_of_exit"
    t.string   "service_details_actual_service"
    t.date     "approved_date"
    t.integer  "user_profile_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "transfer_details", ["user_profile_id"], name: "index_transfer_details_on_user_profile_id"

  create_table "user_profiles", force: true do |t|
    t.string   "uan"
    t.string   "member_id"
    t.string   "member_name"
    t.string   "father_husband_name"
    t.date     "date_of_birth"
    t.date     "date_of_joining"
    t.string   "establishment_id"
    t.string   "establishment_name"
    t.string   "concerned_with"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_profiles", ["uan"], name: "index_user_profiles_on_uan", unique: true

  create_table "users", force: true do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "approved",               default: false, null: false
  end

  add_index "users", ["approved"], name: "index_users_on_approved"
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
