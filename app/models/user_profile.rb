
class UserProfile < ActiveRecord::Base
      has_many :transfer_details, dependent: :destroy
      has_many :contribution_withdrawl_details, dependent: :destroy

      def self.import(file)
            spreadsheet = open_spreadsheet(file)
            firstsheet=spreadsheet.sheet(0)
            #thirdsheet=spreadsheet.sheet(2)
            header = firstsheet.row(1).map!(&:downcase)
            (2..firstsheet.last_row).each do |i|
                  row = Hash[[header, spreadsheet.row(i)].transpose]
                  u = UserProfile.find_by(uan: row['uan'])
                  if u!=nil
                        UserProfile.destroy(u.id)
                  end
                  UserProfile.create(row)
            end

            secondsheet=spreadsheet.sheet(1)
            header = secondsheet.row(1).map!(&:downcase)
            (2..secondsheet.last_row).each do |i|
                  row = Hash[[header, secondsheet.row(i)].transpose]
                  u = UserProfile.find_by(uan: row['uan'])
                  if u!=nil
                        row["user_profile_id"] = u.id
                        TransferDetail.create(row)
                  else
                        puts "Transfer details for #{row["uan"]} do not exist"
                  end
            end

            thirdsheet=spreadsheet.sheet(2)
            header = thirdsheet.row(1).map!(&:downcase)
            (2..thirdsheet.last_row).each do |i|
                  row = Hash[[header, thirdsheet.row(i)].transpose]
                  u = UserProfile.find_by(uan: row['uan'])
                  if u!=nil
                        row["user_profile_id"] = u.id
                        ContributionWithdrawlDetail.create(row)
                  else
                        puts "Contribution and withdrawl details for #{row["uan"]} do not exist"
                  end
            end
      end

      def self.open_spreadsheet(file)
            case File.extname(file.original_filename)
                  when ".csv" then Csv.new(file.path, nil, :ignore)
                  when ".xls" then Excel.new(file.path, nil, :ignore)
                  when ".xlsx" then Roo::Excelx.new(file.path, nil, :ignore)
                  else raise "Unknown file type: #{file.original_filename}"
            end
      end

      def edlis
            sum=0
            transfer_details.each do |transfer_detail|
                  sum+=transfer_detail.employee_wage
            end
            contribution_withdrawl_details.each do |detail|
                  sum+=detail.employee_wage
            end
            (sum/0.05).round
      end

      def average_salary
            10
      end

      def date_of_retirement
            date_of_birth + 58.years - 1.day
      end

      def date_of_final_withdrawal
            date_of_birth+50.years
      end

      def days_in_service_current
            (Date.today - date_of_joining).to_i
      end

      def days_in_service_withdrawal
            (date_of_final_withdrawal - date_of_joining).to_i
      end

      def days_in_service_retirement
            (date_of_retirement - date_of_joining).to_i
      end

      def pension_current
            (average_salary * days_in_service_current / 365/70).round(2)
      end

      def pension_withdrawal
            (average_salary * days_in_service_withdrawal/365/70).round(2)
      end

      def pension_retirement
            (average_salary * days_in_service_retirement/365/70).round(2)
      end

      def pension
            ret = {}
            if Date.today < date_of_retirement
                  ret[:pension_current] = pension_current
                  ret[:pension_withdrawal] = pension_withdrawal if Date.today < date_of_final_withdrawal
            end
            ret[:pension_retirement] = pension_retirement
            ret
      end


end
