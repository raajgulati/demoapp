class AddIndexToUserProfiles < ActiveRecord::Migration
  def change
    add_index :user_profiles, :uan, unique: true
  end
end
