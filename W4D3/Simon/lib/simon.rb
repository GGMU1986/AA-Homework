class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @seq = []
    @sequence_length = 1
    @game_over = false
  end

  def play
    until game_over
      take_turn
      system("clear")
    end

    game_over_message
    reset_game
  end

  def take_turn
    
    show_sequence
    require_sequence
    
    unless game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |col|
      puts col
      sleep 0.75
      system("clear")
      sleep 0.25
    end
  end

  def require_sequence
    puts "Please repeat the sequence one color at a time: "
    @seq.each do |col|
      guess = gets.chomp
      if col.upcase != guess
        game_over = true
        break
      end
    end
    sleep 0.25
  end

  def add_random_color
    seq << COLORS.map { |col| col[0].upcase }.sample
  end

  def round_success_message
    puts "Nice job! Keep going champ!"
  end

  def game_over_message
    puts "You made it to #{sequence_length - 1} rounds" 
    puts "You've disgraced your family. BE GONE!"
  end

  def reset_game
    @game_over = false
    seq = []
    sequence_length = 1
  end
end
