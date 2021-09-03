FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(arr)
    longest = false
    FISH.each_with_index do |ele1, i1|
        FISH.each_with_index do |ele2, i2|
            if i2 > i1
                if ele1.length > ele2.length
                    longest = ele1
                else
                    longest = ele2
                end
            end
        end
    end
    longest
end

def clever_octopus(arr)
    arr.inject { |acc, el| acc.length > el.length ? acc : el }
end

# p sluggish_octopus(FISH)
p clever_octopus(FISH)