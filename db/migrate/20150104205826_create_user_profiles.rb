class CreateUserProfiles < ActiveRecord::Migration
  def change
    create_table :user_profiles do |t|
      t.string :uan, index: true
      t.string :member_id
      t.string :member_name
      t.string :father_husband_name
      t.date :date_of_birth
      t.date :date_of_joining
      t.string :establishment_id
      t.string :establishment_name
      t.string :concerned_with

      t.timestamps
    end
  end
end
