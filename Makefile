check:
	while true; do out=$$(npm test); if [ $$? == "1" ]; then say jackpot; fi; sleep 30; done