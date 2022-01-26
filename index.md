<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gold Jewelry Price Calculator For Buy and Sell in Sri Lanka</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <meta name="description" content="Find the real price of your gold jewelry when you buy and sell in sri lanka."/>
</head>
<body>

    <div class="container mt-3">
        <div class="col-sm-10 offset-sm-1">
            <h1 class="text-center">Gold Jewelry Price Calculator For Buy and Sell in Sri Lanka</h1>
            <form class="row g-3 needs-validation mt-3" id="calform" novalidate>
              <div class="col-12">
                <label for="validationCustom01" class="form-label">24 கரட் தங்க விலை (1 பவுன்)</label>
                <div class="input-group">
                    <span class="input-group-text" id="inputGroupPrepend">Rs</span>
                <input type="number" class="form-control" id="goldPrice" value="<?= ceil($amount / 100) * 100 ?>" required>
                </div>
                <div id="priceHelp" class="form-text">கொழும்பு Sea Street தங்கத்தின் விலையை அடிப்படையாகக் கொண்டது. <?= date("Y-m-d") ?> அன்று அப்டேட் செய்யப்பட்டது.
                </div>
              </div>
              <div class="col-12">
                <label for="validationCustom04" class="form-label">கரட்</label>
                <select class="form-select" id="karat" required>
                  <option selected disabled value="">Choose...</option>
                  <option value="18">18k</option>
                  <option value="21">21k</option>
                  <option value="22">22k</option>
                  <option value="23">23k</option>
                  <option value="24">24k</option>
                </select>
              </div>
              <div class="col-12">
                <label for="validationCustom01" class="form-label">செய்கூலி</label>
                <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend">Rs</span>
                <input type="number" class="form-control" id="making" value="0" required>
                <span class="input-group-text" id="inputGroupPrepend">ஒரு கிராம் இற்கு</span>
                </div>
              </div>
              
              <div class="col-12">
                <label for="validationCustom01" class="form-label">சேதார சதவீதம்</label>
                <div class="input-group">
                <input type="number" class="form-control" id="wastage" value="0" required>
                <span class="input-group-text" id="inputGroupPrepend">%</span>
                </div>
              </div>

              <div class="col-12">
                <label for="validationCustom01" class="form-label">நிறை</label>
                <div class="input-group">
                <input type="number" class="form-control" id="weight" required>
                <span class="input-group-text" id="inputGroupPrepend">கிராம்</span>
                </div>
              </div>
              
              <div class="col-12 text-center">
                <button class="btn btn-primary" type="submit">விலையை கணக்கிடு</button>
              </div>
            </form>

            <table id="result" class="table table-striped mt-5">
                <tr><th>விற்பனையாளர் சொல்லும் மொத்த சேதாரம்</th><td>Rs <span id="total_wastage_cost" class="text-danger">0.00</span></td></tr>
                <tr><th>விற்பனையாளர் சொல்லும் மொத்த செய்கூலி</th><td>Rs <span id="total_making_cost" class="text-danger">0.00</span></td></tr>
                <tr><th>விற்பனையாளர் சொல்லும் செய்கூலி மற்றும் சேதாரம் மட்டும்</th><td>Rs <span id="total_making_wastage_cost"  class="text-danger">0.00</span></td></tr>
                <tr><th>நகைக்குள் இருக்கும் சுத்த தங்கத்தின் இன்றைய மதிப்பு மட்டும்</th><td>Rs <span id="total_pure_gold_price" class="text-info">0.00</span></td></tr>
                <tr><th>நகைக்கு விற்பனையாளர் அறவிடும் மொத்த விற்பனை விலை</th><td>Rs <span id="total_price" class="text-success">0.00</span></td></tr>
            </table>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>