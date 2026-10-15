Register app image assignments are explicit in each item's imageTag in
app.js, so inserting a slide will not change existing image filenames.
Bio Data Register uses 2a.jpg; Station Diary uses 11a.jpg. For a new
entry with an image, set a unique imageTag (without the extension) on
that item and add the matching .jpg file in this folder.

Original source-deck image notes (the current app mapping may differ):
2a  Station Diary            11a Possession Register
3a  Night Drill Register     12a Private No. Book
4a  Key Register             13a Checklist And Indemnity Bond
5a  Petty Repair Register    14a Caution Order and ATP
6a  Equipment Failure Reg.   16a Earning Register
7a  Inventory/Fixed Assets   17a Summary of Stocks
8a  Incident Register        18a SDM
10a PTW (Issue/Cancel)       20a L&F Receiving and Claim Registers

Not in the source pptx (still need photos):
1a, 9a, 15a, 19a  - these are the section-index slides; the deck
                    doesn't show a photo slot on those pages, so
                    no image is needed.
21a - 28a         - Manual Refund Foil, Balance Sheet, Penalty Book,
                    SJT, Assurance Register, Disabled Passenger
                    Assistance, H/K Inspection, Complaint Book.
                    Add these as 21a.jpg ... 28a.jpg when ready.

If your images use a different extension (.png, .webp, etc.),
open app.js and change the IMAGE_EXT constant near the top.
