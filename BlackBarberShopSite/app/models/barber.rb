class Barber < ActiveRecord::Base
 belongs_to :barbershop
 has_many  :ratings

end
